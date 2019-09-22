import React, {Component} from 'react';
import {View, Text, Alert} from 'react-native';
import {connect} from 'react-redux';

import {RoundedButton} from '../../common/RoundedButton';
import {styles} from './styles';

import {getLocalizedStrings} from '../../localization';
import {LOCALIZE_CATEGORIES} from '../../localization/const';

import {goToNextPhase} from '../../reducers/sessions.duck';

class StepResult extends Component {
  continue = () => {
    this.props.goToNextPhase(this.props.phase + 1);
    this.props.navigation.navigate('Questions');
  };

  schedule = () => {
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
  };
};

const mapDispatchToProps = dispatch => ({
  goToNextPhase: phase => dispatch(goToNextPhase(phase)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StepResult);
