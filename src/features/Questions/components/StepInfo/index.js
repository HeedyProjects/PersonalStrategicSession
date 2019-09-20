import React, {Component} from 'react';
import {View, Text, Alert} from 'react-native';
import {connect} from 'react-redux';

import {styles} from './styles';
import {getLocalizedStrings} from '../../../../localization';
import {LOCALIZE_CATEGORIES} from '../../../../localization/const';
import {SESSION_MODE} from '../../../../reducers/sessions.duck';

class StepInfo extends Component {
  state = {
    data: [{title: '', body: ''}],
  };

  componentDidMount() {
    const localization = getLocalizedStrings(
      this.props.language,
      LOCALIZE_CATEGORIES.problemSteps,
    );
    const problemMode = this.props.sessionMode === SESSION_MODE.problem;
    const data = [
      {title: '', body: ''},
      {
        title: problemMode
          ? localization.step1HeaderProblem
          : localization.step1HeaderGoal,
        body: localization.step1Title,
      },
      {title: localization.step2Header, body: localization.step2Title},
      {
        title: localization.step3Header,
        body: problemMode
          ? localization.step3TitleProblem
          : localization.step3TitleGoal,
      },
      {
        title: localization.step4Header,
        body: problemMode
          ? localization.step4TitleProblem
          : localization.step4TitleGoal,
      },
      {title: localization.step5Header, body: localization.step5Title},
    ];
    this.setState({data});
  }

  render() {
    const {step} = this.props;
    const {data} = this.state;
    if (!data[step]) {
      return false;
    }
    const {title, body} = data[step];
    return (
      <View style={styles.mainVew}>
        <View style={styles.subView}>
          <Text style={styles.firstText}>{title}</Text>
        </View>
        <View>
          <Text style={styles.secondText}>{body}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.language.currentLanguage,
    sessionMode: state.sessions.sessionMode,
  };
};

export default connect(
  mapStateToProps,
  null,
)(StepInfo);
