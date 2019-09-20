import {createSwitchNavigator} from 'react-navigation';

import StartScreen from '../../features/StartScreen';
import Questions from '../../features/Questions';

const MainNavigator = createSwitchNavigator(
  {
    StartScreen: {screen: StartScreen},
    Questions: {screen: Questions},
  },
  {
    initialRoute: 'StartScreen',
    headerMode: 'none',
  },
);

export default MainNavigator;
