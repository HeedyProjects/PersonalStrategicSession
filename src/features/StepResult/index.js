import React, {Component} from 'react';
import {View, Text, Alert} from 'react-native';
import {connect} from 'react-redux';

import {RoundedButton} from '../../common/RoundedButton';
import {styles} from './styles';

import {getLocalizedStrings} from '../../localization';
import {LOCALIZE_CATEGORIES} from '../../localization/const';

import {
  goToNextPhase,
  storeFinishedSession,
} from '../../reducers/sessions.duck';

import {sendAnalyticEvent} from '../../services/Analytics';
import {ANALYTIC_EVENT} from '../../services/Analytics/const';

class StepResult extends Component {
  continue = () => {
    let {phase = 1} = this.props;
    const {answers = {}} = this.props;
    const phasesLength = Object.keys(answers).length;
    // phase's start index os 0
    const isLastPhase = ++phase === phasesLength;

    if (isLastPhase) {
      const time = new Date();
      this.props.storeFinishedSession(time);
      sendAnalyticEvent(ANALYTIC_EVENT.startNewPhase);
      this.props.navigation.navigate('Questions');
      return;
    }

    this.props.goToNextPhase(phase);
    sendAnalyticEvent(ANALYTIC_EVENT.startNewPhase);
    this.props.navigation.navigate('Questions');
  };

  schedule = () => {
    sendAnalyticEvent(ANALYTIC_EVENT.schedule);
    const message = getLocalizedStrings(
      this.props.language,
      LOCALIZE_CATEGORIES.common,
    ).stub;
    Alert.alert(message);
  };

  render() {
    const localization = getLocalizedStrings(
      this.props.language,
      LOCALIZE_CATEGORIES.resultScreen,
    );
    const {phase} = this.props;
    let resultText = '';
    switch (phase) {
      case 0:
        resultText = getLocalizedStrings(
          this.props.language,
          LOCALIZE_CATEGORIES.problemSteps,
        ).endTitle;
        break;
      case 1:
        resultText = getLocalizedStrings(
          this.props.language,
          LOCALIZE_CATEGORIES.futureSteps,
        ).endTitle;
        break;
      case 2:
        resultText = getLocalizedStrings(
          this.props.language,
          LOCALIZE_CATEGORIES.planSteps,
        ).endTitle;
        break;
      default:
        resultText = getLocalizedStrings(
          this.props.language,
          LOCALIZE_CATEGORIES.problemSteps,
        ).endTitle;
        break;
    }
    return (
      <View style={styles.container}>
        <View style={styles.subView}>
          <Text style={styles.firstText}>{resultText}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <RoundedButton
            newStyle={styles.button}
            title={localization.continueNow}
            onPress={() => this.continue()}
          />
          <RoundedButton
            newStyle={styles.button}
            title={localization.scheduleTheSession}
            onPress={() => this.schedule()}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.language.currentLanguage,
    phase: state.sessions.phase,
    answers: state.sessions.answers,
  };
};

const mapDispatchToProps = dispatch => ({
  goToNextPhase: phase => dispatch(goToNextPhase(phase)),
  storeFinishedSession: time => dispatch(storeFinishedSession(time)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StepResult);
