import React, {Component} from 'react';
import {View, Text} from 'react-native';
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
    const problemMode = this.props.sessionMode === SESSION_MODE.problem;
    const data = this.getQuestionsByPhase(this.props.phase, problemMode);
    this.setState({data});
  }

  getQuestionsByPhase = (phase, problemMode) => {
    switch (phase) {
      case 0:
        return this.getFirstPhaseQuestions(problemMode);
      case 1:
        return this.getSecondPhaseQuestions();
      case 2:
        return this.getThirdPhaseQuestions();
      default:
        return this.getFirstPhaseQuestions(problemMode);
    }
  };

  getFirstPhaseQuestions = problemMode => {
    const localization = getLocalizedStrings(
      this.props.language,
      LOCALIZE_CATEGORIES.problemSteps,
    );
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
    return data;
  };

  getSecondPhaseQuestions = () => {
    const localization = getLocalizedStrings(
      this.props.language,
      LOCALIZE_CATEGORIES.futureSteps,
    );
    const data = [
      {title: '', body: ''},
      {title: localization.step1Header, body: localization.step1Title},
      {title: localization.step2Header, body: localization.step2Title},
      {title: localization.step3Header, body: localization.step3Title},
      {title: localization.step4Header, body: localization.step4Title},
      {title: localization.step5Header, body: localization.step5Title},
      {title: localization.step6Header, body: localization.step6Title},
      {title: localization.step7Header, body: localization.step7Title},
    ];
    return data;
  };

  getThirdPhaseQuestions = () => {
    const localization = getLocalizedStrings(
      this.props.language,
      LOCALIZE_CATEGORIES.planSteps,
    );
    const data = [
      {title: '', body: ''},
      {title: localization.step1Header, body: localization.step1Title},
      {title: localization.step2Header, body: localization.step2Title},
      {title: localization.step3Header, body: localization.step3Title},
    ];
    return data;
  };

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
    phase: state.sessions.phase,
  };
};

export default connect(
  mapStateToProps,
  null,
)(StepInfo);
