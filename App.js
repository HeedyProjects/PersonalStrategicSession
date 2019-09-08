import React, { Fragment, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import firebase from 'react-native-firebase';

import Questions from './src/features/Questions';
import {GREEN_COLOR} from './src/utils/Colors';

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
