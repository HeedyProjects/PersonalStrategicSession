import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { DARK_GRAY } from '../../../../utils/Colors';
import { styles } from './styles';

export const StepHeader = ({
  empty, step, onBack, totalSteps
}) => (
  <View style={styles.mainView}>
    <TouchableOpacity
      style={styles.backButtonStyle}
      onPress={onBack}
    >
      <Icon name="chevron-left" size={20} color={DARK_GRAY} />
    </TouchableOpacity>
    <View style={styles.rightBlock}>
      {empty ? (<View />) : (
        <Text style={styles.stepStyle}>
            Шаг
          {' '}
          {step}
          {' '}
            из
          {' '}
          {totalSteps}
        </Text>
      )}
    </View>
    <View style={styles.bottomView} />
  </View>
);
