import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {getLocalizedStrings} from '../../localization';
import {LOCALIZE_CATEGORIES} from '../../localization/const';
import {DARK_GRAY} from '../../utils/Colors';
import {getQuestionsByPhase} from '../Questions/questions';

import {styles} from './styles';

class SessionScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sessionID: props.navigation.state.params.sessionID || null,
    };
  }

  goTo(routeName, params) {
    this.props.navigation.navigate({routeName, params: {...params}});
  }

  render() {
    const {sessions, language} = this.props;
    const {sessionID} = this.state;

    console.log(sessions[sessionID]);

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButtonStyle}
          onPress={() => this.goTo('SessionsList')}>
          <Icon name="chevron-left" size={20} color={DARK_GRAY} />
        </TouchableOpacity>
        {!sessionID || !sessions[sessionID] ? (
          <Text style={styles.answer}>
            {
              getLocalizedStrings(language, LOCALIZE_CATEGORIES.sessionScreen)
                .noExist
            }
          </Text>
        ) : (
          <ScrollView>
            {Object.keys(sessions[sessionID].answers).map(phase => {
              return Object.keys(sessions[sessionID].answers[phase]).map(
                answerID => {
                  if (answerID === 0) {
                    return;
                  }
                  const answer = sessions[sessionID].answers[phase][answerID];
                  const questions = getQuestionsByPhase(
                    Number(phase),
                    sessions[sessionID].sessionMode,
                    language,
                  );
                  const {title} = questions[answerID] || {title: ''};
                  return (
                    <View key={`${phase}-${answerID}`}>
                      {title ? (
                        <Text style={styles.question}>{title}</Text>
                      ) : null}
                      <Text style={styles.answer}>{answer}</Text>
                    </View>
                  );
                },
              );
            })}
          </ScrollView>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    sessions: state.sessions.prevSessions || [],
    language: state.language.currentLanguage,
  };
};

export default connect(mapStateToProps)(SessionScreen);
