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
  clearSession,
} from '../../reducers/sessions.duck';

import {sendAnalyticEvent} from '../../services/Analytics';
import {ANALYTIC_EVENT} from '../../services/Analytics/const';
import {getQuestionsByPhase} from '../Questions/questions';
import {sendEmail} from '../../utils/sendEmail';

class StepResult extends Component {
  componentDidMount = () => {
    let {phase} = this.props;
    const {answers} = this.props;
    const phasesLength = Object.keys(answers).length;
    // phase's start index is "0".
    const isLastPhase = phase + 1 === phasesLength;

    if (isLastPhase) {
      const time = new Date();
      this.props.storeFinishedSession(time);
      sendAnalyticEvent(ANALYTIC_EVENT.sessionCompleted);
      return;
    }
  };

  continue = () => {
    let {phase} = this.props;
    this.props.goToNextPhase(++phase);
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

  startNewSession = () => {
    this.props.clearSession();
    this.props.navigation.navigate('StartScreen');
  };

  sendResultsToEmail = subject => {
    const email = 'yourEmail@mail.com';
    const {answers, sessionMode, language} = this.props;
    const allAnswers = Object.keys(answers).map(phase => {
      const phaseAnswers = Object.keys(answers[phase]).map(answerID => {
        const questions = getQuestionsByPhase(
          Number(phase),
          sessionMode,
          language,
        );
        const answer = answers[phase][answerID];
        const {title} = questions[answerID] || {title: ''};
        return `${title}\n${answer}\n`;
      });
      return phaseAnswers.join('\n');
    });
    const body = allAnswers.join('\n\n');
    sendEmail(email, subject, body);
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
          {phase === 2 && (
            <View>
              <RoundedButton
                newStyle={styles.button}
                title={localization.sendResultsToEmail}
                onPress={() =>
                  this.sendResultsToEmail(localization.sessionResults)
                }
              />
              <RoundedButton
                newStyle={styles.button}
                title={localization.startNewSession}
                onPress={() => this.startNewSession()}
              />
            </View>
          )}
          {phase !== 2 && (
            <View>
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
          )}
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
    sessionMode: state.sessions.sessionMode,
  };
};

const mapDispatchToProps = dispatch => ({
  goToNextPhase: phase => dispatch(goToNextPhase(phase)),
  storeFinishedSession: time => dispatch(storeFinishedSession(time)),
  clearSession: () => dispatch(clearSession()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StepResult);
