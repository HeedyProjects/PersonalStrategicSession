import { StyleSheet } from 'react-native';

import { RED_COLOR, WHITE_COLOR } from '../../../../utils/Colors';

export const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    borderColor: RED_COLOR,
    borderWidth: 0,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: { color: WHITE_COLOR, fontWeight: '500', fontSize: 18 }
});
