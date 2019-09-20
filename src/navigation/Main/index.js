import {createSwitchNavigator} from 'react-navigation';

import StartScreen from '../../features/StartScreen';
import Questions from '../../features/Questions';
import ProblemStepResult from '../../features/ProblemStepResult';

const MainNavigator = createSwitchNavigator(
  {
    StartScreen: {screen: StartScreen},
    Questions: {screen: Questions},
    ProblemStepResult: {screen: ProblemStepResult},
  },
  {
    initialRoute: 'StartScreen',
    headerMode: 'none',
  },
);

export default MainNavigator;
