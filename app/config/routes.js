import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import MainSetup from '../screens/MainSetup';

export default StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
    },
  },
  MainSetup: {
    screen: MainSetup,
    navigationOptions: {
      title: 'Add up to three tasks, a reward and an activity. Then set the timer and press start.',
    },
  },
});
