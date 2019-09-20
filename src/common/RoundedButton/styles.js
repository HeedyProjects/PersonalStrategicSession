import {StyleSheet} from 'react-native';

import {GREEN_COLOR, WHITE_COLOR} from '../../utils/Colors';

export const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: GREEN_COLOR,
    borderRadius: 70 / 2,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    width: 280,
  },
  textStyle: {color: WHITE_COLOR, fontWeight: '500', fontSize: 18},
  container: {
    flex: 1,
  },
});
