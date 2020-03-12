import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './styles';
import {DARK_GRAY} from '../../utils/Colors';

import {RoundedButton} from '../../common/RoundedButton';

/**
 * Create the session's title from Date constr.
 * @param {String} timeStr
 * @returns {String}
 */
const makeSessionTitle = timeStr => {
  const time = new Date(timeStr);
  return `${time.getDate()}.${time.getMonth() +
    1}.${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`;
};

class SessionsList extends React.PureComponent {
  goTo(routeName, params) {
    this.props.navigation.navigate({routeName, params: {...params}});
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButtonStyle}
          onPress={() => this.goTo('StartScreen')}>
          <Icon name="chevron-left" size={20} color={DARK_GRAY} />
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.buttonContainer}>
          {this.props.sessions.length > 0 ? (
            this.props.sessions.map((session, id) => (
              <RoundedButton
                key={id}
                newStyle={styles.button}
                title={makeSessionTitle(session.time)}
                onPress={() => this.goTo('SessionScreen', {sessionID: id})}
              />
            ))
          ) : (
            <Text>Sessions doesn't exist</Text>
          )}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {sessions: state.sessions.prevSessions || []};
};

export default connect(mapStateToProps)(SessionsList);
