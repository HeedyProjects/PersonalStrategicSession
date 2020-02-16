import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import {styles} from './styles';
import {RoundedButton} from '../../common/RoundedButton';

function PrevSessions(props) {
  const {sessions, navigation} = props;
  return (
    <View style={styles.container}>
      {sessions.length > 0 ? (
        sessions.map((session, id) => <Text key={id}>{session.time}</Text>)
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
