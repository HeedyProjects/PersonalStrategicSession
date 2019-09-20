import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import {RoundedButton} from '../../common/RoundedButton';
import {styles} from './styles';

import {getLocalizedStrings} from '../../localization';
import {LOCALIZE_CATEGORIES} from '../../localization/const';

class ProblemStepResult extends Component {
  continue = () => {};

  schedule = () => {};

  render() {
    const localization = getLocalizedStrings(
      this.props.language,
      LOCALIZE_CATEGORIES.resultScreen,
    );
    return (
      <View style={styles.container}>
        <View style={styles.subView}>
          <Text style={styles.firstText}>{localization.resultText}</Text>
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
  };
};

export default connect(
  mapStateToProps,
  null,
)(ProblemStepResult);
