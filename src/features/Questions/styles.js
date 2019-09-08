import {Dimensions, StyleSheet, Platform} from 'react-native';

import {
  GREEN_COLOR,
  LIGHT_GRAY,
  LIGHT_GRAY_BG,
  RED_COLOR,
} from '../../utils/Colors';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: GREEN_COLOR,
  },
  questionnaireMainView: {
    flex: 1,
    backgroundColor: LIGHT_GRAY_BG,
  },
  questionnaireView: {
    position: 'absolute',
    width,
    top: 200,
    left: (width - 150) / 2,
    flexDirection: 'row',
  },
  questionnaireInputTextInput: {
    height: Platform.OS === 'ios' ? 40 : 80,
    fontSize: 40,
    textAlign: 'right',
    borderColor: RED_COLOR,
    borderWidth: 0,
    width: 100,
    paddingRight: 10,
  },
  questionnaireInputView: {
    alignItems: 'center',
    borderColor: RED_COLOR,
    borderWidth: 0,
    justifyContent: Platform.OS === 'ios' ? 'flex-end' : 'center',
  },
  questionnaireInputViewText: {
    borderColor: RED_COLOR,
    borderWidth: 0,
    width: 34,
    color: LIGHT_GRAY,
    fontSize: Platform.OS === 'ios' ? 15 : 25,
    fontWeight: '600',
  },
  questionnaireGender: {
    borderColor: RED_COLOR,
    borderWidth: 0,
    alignItems: 'center',
    paddingTop: 40,
  },
  questionnaireGenderSubview: {
    height: 40,
  },
  // mainView: {
  //   flex: 1,
  //   backgroundColor: LIGHT_GRAY_BG,
  // },
  // mainSubView: { height: 10 },
  // motivateView: {
  //   padding: 20,
  //   paddingTop: 0,
  // },
  // motivateText: {
  //   fontSize: 28,
  //   fontWeight: '800',
  //   color: BASE_GRAY
  // },
  // motivateTextWithRecommendation: {
  //   fontSize: width <= 320 ? 20 : 28,
  //   fontWeight: '800',
  //   color: BASE_GRAY
  // },
  // recommendationView: { padding: 0, marginHorizontal: 20 },
  // recommendationBoldText: {
  //   color: LIGHT_GRAY, fontSize: 20, fontWeight: '800', paddingBottom: 10
  // },
  // recommendationText: { fontSize: 16, fontWeight: '400', color: LIGHT_GRAY },
  // emailView: {
  //   padding: 20,
  //   paddingTop: 0,
  //   alignItems: 'center',
  // },
  // emailText: {
  //   width: 280,
  //   borderRadius: 25,
  //   height: 45,
  //   textAlign: 'center',
  //   backgroundColor: WHITE_COLOR,
  //   shadowColor: GREEN_COLOR,
  //   shadowOffset: {
  //     width: 0,
  //     height: 10,
  //   },
  //   shadowOpacity: 0.4,
  //   shadowRadius: 10,
  //   marginTop: 40,
  // },
  // checkInView: { paddingTop: 30 },
  // otherView: {
  //   flexDirection: 'column',
  //   marginTop: 24,
  // },
  // otherText: {
  //   textAlign: 'center',
  //   fontSize: 17,
  //   color: LIGHT_GRAY,
  //   marginBottom: 10,
  // },
  // oauthView: { flexDirection: 'row' },
  // inputStyle: {
  //   width: 280,
  //   borderRadius: 25,
  //   height: 45,
  //   textAlign: 'center',
  //   backgroundColor: WHITE_COLOR,
  //   shadowColor: GREEN_COLOR,
  //   shadowOffset: {
  //     width: 0,
  //     height: 10,
  //   },
  //   shadowOpacity: 0.4,
  //   shadowRadius: 10,
  //   marginTop: 40,
  // },
  // vkButton: {
  //   flex: 1,
  //   backgroundColor: VK_COLOR,
  //   borderRadius: 50 / 2,
  //   height: 50,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   width: 150,
  //   marginLeft: 20,
  //   marginRight: 10,
  // },
  // vkButtonIOS: {
  //   flex: 1,
  //   backgroundColor: VK_COLOR,
  //   borderRadius: 68 / 2,
  //   height: 50,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   width: 150,
  //   marginLeft: 20,
  //   marginRight: 10,
  // },
  // fbButton: {
  //   flex: 1,
  //   backgroundColor: FB_COLOR,
  //   borderRadius: 50 / 2,
  //   height: 50,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   width: 150
  // },
  // fbButtonIOS: {
  //   flex: 1,
  //   backgroundColor: FB_COLOR,
  //   borderRadius: 68 / 2,
  //   height: 50,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   width: 150,
  //   marginLeft: 10,
  //   marginRight: 20,
  // },
  // googleButton: {
  //   flex: 1,
  //   backgroundColor: GOOGLE_COLOR,
  //   borderRadius: 68 / 2,
  //   height: 50,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   width: 150,
  //   marginLeft: 10,
  //   marginRight: 20,
  // },
  // socialButtonHeader: {
  //   textAlign: 'center',
  //   fontSize: 17,
  //   color: LIGHT_GRAY,
  //   marginBottom: 10,
  // },
  // fbText: {
  //   color: WHITE_COLOR,
  //   fontWeight: '500',
  //   fontSize: 18,
  // },
  // vkText: {
  //   color: WHITE_COLOR,
  //   fontWeight: '500',
  //   fontSize: 18,
  // },
  // bottomContainer: {
  //   flexDirection: 'column',
  //   position: 'absolute',
  //   width: '100%',
  //   bottom: 20,
  // },
  // registerButtonContainer: {
  //   paddingTop: 30,
  // },
  // centralContainer: {
  //   padding: 20,
  //   alignItems: 'center',
  // },
  //
  //
  // questionnaireViewStep1: {
  //   flex: 1,
  //   alignItems: 'center',
  //   flexDirection: 'column',
  //   marginBottom: 30,
  // },
  //
  //
  //
  // registrationView: { flex: 1 }
});
