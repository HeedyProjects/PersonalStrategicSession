import {createSwitchNavigator} from 'react-navigation';

import StartScreen from '../../features/StartScreen';
import Questions from '../../features/Questions';
import StepResult from '../../features/StepResult';

const MainNavigator = createSwitchNavigator(
  {
    StartScreen: {screen: StartScreen},
    Questions: {screen: Questions},
    StepResult: {screen: StepResult},
  },
  {
    initialRoute: 'StartScreen',
    headerMode: 'none',
  },
);

export default MainNavigator;
