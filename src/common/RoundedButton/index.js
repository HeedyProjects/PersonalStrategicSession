import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';

export const RoundedButton = ({title, onPress, newStyle}) => (
  <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, newStyle]}>
    <Text style={styles.textStyle}>{title}</Text>
  </TouchableOpacity>
);
