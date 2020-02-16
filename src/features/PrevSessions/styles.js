import {StyleSheet, Dimensions} from 'react-native';

import {
  GREEN_COLOR,
  WHITE_COLOR,
  LIGHT_GRAY,
  BASE_GRAY,
} from '../../utils/Colors';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: WHITE_COLOR},
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
    width,
  },
  mainView: {
    flex: 1,
  },
  button: {
    margin: 10,
  },
  firstText: {
    fontSize: 25,
    fontWeight: '400',
    margin: 25,
    marginTop: 150,
    color: BASE_GRAY,
  },
});
