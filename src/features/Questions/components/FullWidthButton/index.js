import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, TouchableOpacity } from 'react-native';

import { GREEN_COLOR, INACTIVE_SILVER, WHITE_COLOR } from '../../../../utils/Colors';
import { styles } from './styles';

export const FullWidthButton = ({
  onPress, keyboardHeight, width, disabled, title, style = {}, icon
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={
      [
        styles.main,
        { bottom: keyboardHeight },
        { width },
        style,
        { backgroundColor: disabled ? INACTIVE_SILVER : GREEN_COLOR }
      ]
    }
  >
    {icon && <Icon name={icon} size={25} color={WHITE_COLOR} />}
    <Text style={styles.text}>
      {title}
    </Text>
  </TouchableOpacity>
);
