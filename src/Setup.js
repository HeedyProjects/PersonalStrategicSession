/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import firebase from 'react-native-firebase';
import {getLocales} from 'react-native-localize';

import {GREEN_COLOR} from './utils/Colors';
import {setLanguage} from './reducers/language.duck';
import {userAuth} from './reducers/sessions.duck';
import AppNavigator from './navigation';

class Setup extends Component {
  componentDidMount() {
    const locale = getLocales()[0].languageCode;
    this.props.setLanguage(locale);

    this.ref = firebase.firestore().collection('sessions');
    firebase
      .auth()
      .signInAnonymously()
      .then(credential => {
        if (credential) {
          console.log('default app user ->', credential.user.toJSON());
          this.ref.doc(credential.user.uid).set({
            userUid: credential.user.uid,
          });
          this.props.userAuth(credential.user.uid);
        }
      });
  }

  render() {
    return (
      <SafeAreaView
        style={{flex: 1, backgroundColor: GREEN_COLOR}}
        forceInset={{bottom: 'never'}}>
        <AppNavigator
          ref={nav => {
            this.navigator = nav;
          }}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.language.currentLanguage,
  };
};

const mapDispatchToProps = dispatch => ({
  setLanguage: language => dispatch(setLanguage(language)),
  userAuth: uid => dispatch(userAuth(uid)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Setup);
