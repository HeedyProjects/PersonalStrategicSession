import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';

class StepInfo extends Component {
  render() {
    const {step, data} = this.props;
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

export default StepInfo;
