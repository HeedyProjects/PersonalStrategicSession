import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';

import firebase from 'react-native-firebase';

import Questions from './features/Questions';
import {GREEN_COLOR} from './utils/Colors';

class App extends Component {
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

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: GREEN_COLOR }}
        forceInset={{bottom: 'never'}}>
        <Questions />
      </SafeAreaView>
    );
  }
}

export default App;
