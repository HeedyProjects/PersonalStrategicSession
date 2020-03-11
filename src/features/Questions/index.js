import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  Keyboard,
  Platform,
} from 'react-native';
import {connect} from 'react-redux';
import firebase from 'react-native-firebase';

import {ProgressBar} from './components/ProgressBar';
import {StepHeader} from './components/StepHeader';
import {FullWidthButton} from './components/FullWidthButton';
import StepInfo from './components/StepInfo';

import {styles} from './styles';
import {getQuestionsByPhase} from './questions';
import {SESSION_MODE, saveAnswer} from '../../reducers/sessions.duck';

import {sendAnalyticEvent} from '../../services/Analytics';
import {ANALYTIC_EVENT} from '../../services/Analytics/const';

import {getLocalizedStrings} from '../../localization';
import {LOCALIZE_CATEGORIES} from '../../localization/const';

const {width} = Dimensions.get('window');

class Questions extends Component {
  constructor(props) {
    super(props);
    this.editRef = null;
    this.state = {
      answer: null,
      keyboardHeight: 0,
      step: 1,
      measure: null,
      answers: [],
      data: [{title: '', body: ''}],
      questionsCount: 0,
    };
  }

  componentDidMount() {
    if (Platform.OS === 'ios') {
      Keyboard.addListener('keyboardWillShow', this.onKeyboardShow);
      Keyboard.addListener('keyboardWillHide', this.onKeyboardHide);
    }
    const problemMode = this.props.sessionMode === SESSION_MODE.problem;
    const data = getQuestionsByPhase(
      this.props.phase,
      problemMode,
      this.props.language,
    );
    this.setState({data, questionsCount: data.length});
  }

  componentWillUnmount() {
    if (Platform.OS === 'ios') {
      Keyboard.removeListener('keyboardWillShow', this.onKeyboardShow);
      Keyboard.removeListener('keyboardWillHide', this.onKeyboardHide);
    }
  }

  onKeyboardShow = event => {
    this.setState({keyboardHeight: event.endCoordinates.height - 35});
  };

  onKeyboardHide = () => {
    this.setState({keyboardHeight: 0});
  };

  goBack = () => {
    const {step} = this.state;
    sendAnalyticEvent(ANALYTIC_EVENT.backStep);
    if (step > 1) {
      this.setState({answer: this.props.answers[this.props.phase][step - 1]});
      this.setState({step: step - 1});
    } else {
      this.props.navigation.navigate('StartScreen');
    }
  };

  goNext = () => {
    const {step, questionsCount, answer} = this.state;
    sendAnalyticEvent(ANALYTIC_EVENT.nextStep);
    this.props.saveAnswer(this.props.phase, step, answer);
    this.saveAnswersToFirebase(answer);
    if (step < questionsCount - 1) {
      const nextAnswer = this.props.answers[this.props.phase][step + 1];
      this.setState(() => ({step: step + 1, answer: nextAnswer}));
    } else {
      this.props.navigation.navigate('StepResult');
    }
  };

  saveAnswersToFirebase = answer => {
    const ref = firebase.firestore().collection('sessions');
    ref.doc(this.props.uid).set({
      answers: this.props.answers,
      lastAnswer: answer,
      sessionMode: this.props.sessionMode,
    });
  };

  validate = () => {
    const {step} = this.state;
    let result = true;
    return result;
  };

  onValueChange = text => {
    this.setState({answer: text});
  };

  renderInputString() {
    const {answer, measure, keyboardHeight} = this.state;
    return (
      <View
        style={[styles.questionnaireView, {marginBottom: 60 + keyboardHeight}]}>
        <TextInput
          multiline
          ref={ref => {
            this.editRef = ref;
          }}
          style={styles.questionnaireInputTextInput}
          autoFocus
          onChangeText={this.onValueChange}
          value={answer}
          underlineColorAndroid="rgba(0,0,0,0)"
        />
        <View style={styles.questionnaireInputView}>
          <Text style={styles.questionnaireInputViewText}>{measure}</Text>
        </View>
      </View>
    );
  }

  renderInput() {
    return this.renderInputString();
  }

  renderNextButton() {
    const {keyboardHeight} = this.state;
    const localization = getLocalizedStrings(
      this.props.language,
      LOCALIZE_CATEGORIES.common,
    );
    return (
      <FullWidthButton
        title={localization.next}
        onPress={() => this.goNext()}
        keyboardHeight={keyboardHeight}
        width={width}
        disabled={!this.validate()}
      />
    );
  }

  render() {
    const {step, data, questionsCount} = this.state;
    const localization = getLocalizedStrings(
      this.props.language,
      LOCALIZE_CATEGORIES.common,
    );
    const totalSteps = questionsCount - 1;
    const stepTitle = `${localization.step} ${step} ${localization.from} ${totalSteps}`;
    return (
      <View style={styles.safeAreaViewContainer}>
        <View style={styles.questionnaireMainView}>
          <ProgressBar step={step / (questionsCount - 1)} />
          <StepHeader stepTitle={stepTitle} onBack={this.goBack}
          />
          <StepInfo step={step} data={data} />
          {this.renderInput()}
          {this.renderNextButton()}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.language.currentLanguage,
    sessionMode: state.sessions.sessionMode,
    phase: state.sessions.phase,
    answers: state.sessions.answers,
    uid: state.sessions.uid,
  };
};

const mapDispatchToProps = dispatch => ({
  saveAnswer: (phase, step, answer) =>
    dispatch(saveAnswer(phase, step, answer)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Questions);
