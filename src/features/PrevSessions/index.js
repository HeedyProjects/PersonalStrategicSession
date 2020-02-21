import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, Button} from 'react-native';
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
  return `${time.getDate()} ${time.getMonth() + 1} ${time.getFullYear()}`;
};

function PrevSessions(props) {
  const {sessions, navigation} = props;
  const goBack = () => {
    props.navigation.navigate('StartScreen');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonStyle} onPress={() => goBack()}>
        <Icon name="chevron-left" size={20} color={DARK_GRAY} />
      </TouchableOpacity>
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
