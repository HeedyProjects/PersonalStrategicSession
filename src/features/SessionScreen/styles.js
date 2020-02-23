import {StyleSheet} from 'react-native';

import {WHITE_COLOR, BASE_GRAY} from '../../utils/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  backButtonStyle: {
    width: 60,
    height: 50,
    justifyContent: 'center',
    paddingLeft: 8,
  },
  question: {
    fontSize: 25,
    fontWeight: '900',
    marginTop: 25,
    marginLeft: 25,
    marginRight: 25,
    color: BASE_GRAY,
  },
  answer: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: 10,
    marginLeft: 40,
    marginRight: 25,
    color: BASE_GRAY,
  },
});
