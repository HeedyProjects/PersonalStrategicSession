/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import firebase from 'react-native-firebase';
import {getLocales} from 'react-native-localize';

import Questions from './features/Questions';
import {GREEN_COLOR} from './utils/Colors';
import {setLanguage} from './reducers/language.duck';

class Setup extends Component {
  constructor() {
    super();

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
        }
      });
  }

  componentDidMount() {
    const locale = getLocales()[0].languageCode;
    this.props.setLanguage(locale);
  }

  render() {
    return (
      <SafeAreaView
        style={{flex: 1, backgroundColor: GREEN_COLOR}}
        forceInset={{bottom: 'never'}}>
        <Questions />
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Setup);
