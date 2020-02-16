import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import {styles} from './styles';
import {RoundedButton} from '../../common/RoundedButton';

/**
 * Create the session's title from Date constr.
 * @param {String} timeStr
 * @returns {String}
 */
function makeSessionTitle(timeStr) {
  const time = new Date(timeStr);
  return `${time.getDate()} ${time.getMonth() + 1} ${time.getFullYear()}`;
}

function PrevSessions(props) {
  const {sessions, navigation} = props;
  console.log(sessions);
  return (
    <View style={styles.container}>
      {sessions.length > 0 ? (
        sessions.map((session, id) => (
          <Text
            style={styles.listItem}
            key={id}
            //! TODO: make navigation to the session screen.
            onPress={() => navigation.navigate('SessionScreen')}>
            {makeSessionTitle(session.time)}
          </Text>
        ))
      ) : (
        <Text>Sessions doesn't exist</Text>
      )}
      <View style={styles.buttonContainer}>
        {/* //! TODO: make better ui for a button 'go back'. */}
        <RoundedButton
          newStyle={styles.button}
          title={'Start screen'}
          onPress={() => navigation.navigate('StartScreen')}
        />
      </View>
    </View>
  );
}

const mapStateToProps = state => {
  return {sessions: state.sessions.prevSessions || []};
};

export default connect(mapStateToProps)(PrevSessions);
