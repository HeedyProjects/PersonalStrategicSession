import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import {RoundedButton} from '../../common/RoundedButton';
import {styles} from './styles';

import {getLocalizedStrings} from '../../localization';
import {LOCALIZE_CATEGORIES} from '../../localization/const';

class StartScreen extends Component {
  startWithProblem = () => {
    this.props.navigation.navigate('Questions');
  };

  startWithGoal = () => {
    this.props.navigation.navigate('Questions');
  };

  render() {
    const localization = getLocalizedStrings(
      this.props.language,
      LOCALIZE_CATEGORIES.startScreen,
    );
    return (
      <View style={styles.container}>
        <View style={styles.subView}>
          <Text style={styles.firstText}>{localization.helloText}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <RoundedButton
            newStyle={styles.button}
            title={localization.startWithProblem}
            onPress={() => this.startWithProblem()}
          />
          <RoundedButton
            newStyle={styles.button}
            title={localization.startWithGoal}
            onPress={() => this.startWithGoal()}
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
)(StartScreen);
