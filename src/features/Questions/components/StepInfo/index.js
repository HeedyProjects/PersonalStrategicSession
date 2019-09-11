import React, {Component} from 'react';
import {View, Text, Alert} from 'react-native';
import {connect} from 'react-redux';

import {styles} from './styles';
import {getLocalizedStrings} from '../../../../localization';
import {LOCALIZE_CATEGORIES} from '../../../../localization/const';


class StepInfo extends Component {
  state = {
    data: [{title: '', body: ''}],
  };

  componentDidMount() {
    const localization = getLocalizedStrings(
      this.props.language,
      LOCALIZE_CATEGORIES.problemSteps,
    );

    const data = [
      {title: '', body: ''},
      {title: localization.step1Header, body: localization.step1Title},
      {title: localization.step2Header, body: localization.step2Title},
      {title: localization.step3Header, body: localization.step3Title},
      {title: localization.step4Header, body: localization.step4Title},
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
  };
};

export default connect(
  mapStateToProps,
  null,
)(StepInfo);
