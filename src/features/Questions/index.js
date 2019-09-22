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

import {ProgressBar} from './components/ProgressBar';
import {StepHeader} from './components/StepHeader';
import {FullWidthButton} from './components/FullWidthButton';
import StepInfo from './components/StepInfo';

import {styles} from './styles';
import {getQuestionsByPhase} from './questions';
import {SESSION_MODE} from '../../reducers/sessions.duck';

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
    } else {
      Keyboard.addListener('keyboardDidShow', this.onKeyboardShow);
      Keyboard.addListener('keyboardDidHide', this.onKeyboardHide);
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
    } else {
      Keyboard.removeListener('keyboardDidShow', this.onKeyboardShow);
      Keyboard.removeListener('keyboardDidHide', this.onKeyboardHide);
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
    if (step > 1) {
      this.setState({answer: null});
      this.setState({step: step - 1});
    } else {
      this.props.navigation.navigate('StartScreen');
    }
  };

  goNext = () => {
    const {step, questionsCount} = this.state;
    if (step < questionsCount - 1) {
      this.setState(() => ({step: step + 1, answer: null}));
    } else {
      this.props.navigation.navigate('StepResult');
    }
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
      <View style={[styles.questionnaireView, {marginBottom: 60 + keyboardHeight}]}>
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
    return (
      <FullWidthButton
        title="Далее"
        onPress={this.goNext}
        keyboardHeight={keyboardHeight}
        width={width}
        disabled={!this.validate()}
      />
    );
  }

  render() {
    const {step, data, questionsCount} = this.state;
    return (
      <View style={styles.safeAreaViewContainer}>
        <View style={styles.questionnaireMainView}>
          <ProgressBar step={step / (questionsCount - 1)} />
          <StepHeader
            step={step}
            totalSteps={questionsCount - 1}
            onBack={this.goBack}
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
  };
};

export default connect(
  mapStateToProps,
  null,
)(Questions);
