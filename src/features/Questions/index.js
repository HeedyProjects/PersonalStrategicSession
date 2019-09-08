import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
  Keyboard,
  Platform,
} from 'react-native';
// import connect from 'react-redux/es/connect/connect';
// import { bindActionCreators } from 'redux';

import {ProgressBar} from './components/ProgressBar';
import {StepHeader} from './components/StepHeader';
import {FullWidthButton} from './components/FullWidthButton';
import {StepInfo} from './components/StepInfo';

import {styles} from './styles';
// import {stringToInteger, integerToString} from '../../utils/common';
// import { Analytics, Events } from '../../utils/Analytics';
// import { navigate } from '../../services/navigation';
//import { updateQuestionnaire } from './redux/actions';
// import {
//   Recommendations, HabitQuestions, HelpQuestions, Steps
// } from './const';

const {width} = Dimensions.get('window');

const questionnairePagesCount = 15;

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

  // componentWillMount() {
  //   StatusBar.setHidden(true, null);
  //   if (Platform.OS === 'ios') {
  //     Keyboard.addListener('keyboardWillShow', this.onKeyboardShow);
  //     Keyboard.addListener('keyboardWillHide', this.onKeyboardHide);
  //   } else {
  //     Keyboard.addListener('keyboardDidShow', this.onKeyboardShow);
  //     Keyboard.addListener('keyboardDidHide', this.onKeyboardHide);
  //   }
  // }

  // componentWillUnmount() {
  //   if (Platform.OS === 'ios') {
  //     Keyboard.removeListener('keyboardWillShow', this.onKeyboardShow);
  //     Keyboard.removeListener('keyboardWillHide', this.onKeyboardHide);
  //   } else {
  //     Keyboard.removeListener('keyboardDidShow', this.onKeyboardShow);
  //     Keyboard.removeListener('keyboardDidHide', this.onKeyboardHide);
  //   }
  // }

  // onKeyboardShow = (event) => {
  //   this.setState({ keyboardHeight: event.endCoordinates.height });
  // };

  // onKeyboardHide = () => {
  //   this.setState({ keyboardHeight: 0 });
  // };

  // onValueChange = (value) => {
  //   const { step } = this.state;
  //   const { key } = Object.values(Steps)[step];
  //   this.setState(prevState => ({ value, data: { ...prevState.data, [key]: stringToInteger(value) } }));
  // };

  // getValueForStep = (step, data) => {
  //   const { key } = Object.values(Steps)[step];
  //   return data[key] != null ? integerToString(data[key]) : null;
  // };

  goBack = () => {
    const {step} = this.state;
    this.setState(() => ({step: step - 1, value: null}));
  };

  goNext = () => {
    const {step} = this.state;
    this.setState(() => ({step: step + 1, value: null}));
  };

  checkValuesForUnlockButton = obj => {
    let result = false;

    const keys = Object.keys(obj);
    for (const key of keys) {
      if (obj[key]) {
        result = true;
        break;
      }
    }

    return result;
  };

  validate = () => {
    const {step} = this.state;
    let result = true;
    return result;
  };

  renderInputString() {
    const {value, measure} = this.state;
    return (
      <View style={styles.questionnaireView}>
        <TextInput
          ref={ref => {
            this.editRef = ref;
          }}
          style={styles.questionnaireInputTextInput}
          autoFocus
          onChangeText={this.onValueChange}
          value={value}
          underlineColorAndroid="rgba(0,0,0,0)"
          keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
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

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators({ updateQuestionnaire }, dispatch)
// });

// export default connect(null, mapDispatchToProps)(Questionnaire);

export default Questions;
