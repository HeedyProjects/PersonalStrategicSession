import {createSwitchNavigator} from 'react-navigation';

import StartScreen from '../../features/StartScreen';
import Questions from '../../features/Questions';
import StepResult from '../../features/StepResult';
import PrevSessions from '../../features/PrevSessions';

const MainNavigator = createSwitchNavigator(
  {
    StartScreen: {screen: StartScreen},
    Questions: {screen: Questions},
    StepResult: {screen: StepResult},
    PrevSessions: {screen: PrevSessions},
  },
  {
    initialRoute: 'StartScreen',
    headerMode: 'none',
  },
);

export default MainNavigator;
