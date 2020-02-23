import {createSwitchNavigator} from 'react-navigation';

import StartScreen from '../../features/StartScreen';
import Questions from '../../features/Questions';
import StepResult from '../../features/StepResult';
import SessionsList from '../../features/SessionsList';
import SessionScreen from '../../features/SessionScreen';

const MainNavigator = createSwitchNavigator(
  {
    StartScreen: {screen: StartScreen},
    Questions: {screen: Questions},
    StepResult: {screen: StepResult},
    SessionsList: {screen: SessionsList},
    SessionScreen: {screen: SessionScreen},
  },
  {
    initialRoute: 'StartScreen',
    headerMode: 'none',
  },
);

export default MainNavigator;
