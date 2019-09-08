import { StyleSheet } from 'react-native';

import { DARK_GRAY, RED_COLOR } from '../../../../utils/Colors';

export const styles = StyleSheet.create({
  mainView: {
    height: 50,
    flexDirection: 'row',
    borderColor: RED_COLOR,
    borderWidth: 0
  },
  stepStyle: {
    fontSize: 16,
    color: DARK_GRAY
  },
  backButtonStyle: {
    width: 60,
    height: 50,
    justifyContent: 'center',
    paddingLeft: 8
  },
  rightBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomView: { width: 60 }
});
