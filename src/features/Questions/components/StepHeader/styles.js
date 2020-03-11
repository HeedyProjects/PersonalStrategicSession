import {StyleSheet} from 'react-native';

import {DARK_GRAY} from '../../../../utils/Colors';

export const styles = StyleSheet.create({
  mainView: {
    height: 50,
    flexDirection: 'row',
  },
  stepStyle: {
    fontSize: 16,
    color: DARK_GRAY,
  },
  backButtonStyle: {
    width: 60,
    height: 50,
    justifyContent: 'center',
    paddingLeft: 8,
  },
  rightBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    width: 60,
  },
});
