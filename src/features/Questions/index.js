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

const {width} = Dimensions.get('window');

const questionnairePagesCount = 6;

class Questions extends Component {
  constructor(props) {
    super(props);
    this.editRef = null;
    this.state = {
      value: null,
      keyboardHeight: 0,
      step: 1,
      measure: null,
      answers: [],
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
  }

  componentDidUnmount() {
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
      this.setState(() => ({step: step - 1, value: null}));
    } else {
      this.props.navigation.navigate('StartScreen');
    }
  };

  goNext = () => {
    const {step} = this.state;
    if (step < questionnairePagesCount - 1) {
      this.setState(() => ({step: step + 1, value: null}));
    } else {
      this.props.navigation.navigate('StepResult');
    }
  };

  validate = () => {
    const {step} = this.state;
    let result = true;
    return result;
  };

  renderInputString() {
    const {value, measure, keyboardHeight} = this.state;
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
          value={value}
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
    const {step} = this.state;
    return (
      <View style={styles.safeAreaViewContainer}>
        <View style={styles.questionnaireMainView}>
          <ProgressBar step={step / (questionnairePagesCount - 1)} />
          <StepHeader
            step={step}
            totalSteps={questionnairePagesCount - 1}
            onBack={this.goBack}
          />
          <StepInfo step={step} />
          {this.renderInput()}
          {this.renderNextButton()}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    sessionMode: state.sessions.sessionMode,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Questions);
