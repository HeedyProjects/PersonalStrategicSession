import React from 'react';
import {View, Dimensions} from 'react-native';

import {styles} from './styles';

const {width} = Dimensions.get('window');

export const ProgressBar = ({step}) => (
  <View style={[styles.mainView, {width: step * width}]}>
    <View style={styles.subView} />
  </View>
);
