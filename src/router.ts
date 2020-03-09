import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './screens/home';
import CustomerScreen from './screens/customer';
import PatrimonyScreen from './screens/patrimony';
import ConnectivityScreen from './screens/connectivity';

import PatrimonyCreate from './screens/patrimonyCreate';
import PatrimonyCreateSuccess from './screens/patrimonyCreateSuccess';
import Partitions from './screens/partitions';

import ConfigConnectivity from './screens/configConnectivity';

const stackConnectivity = createStackNavigator(
  {
    ConfigConnectivity: {
      screen: ConfigConnectivity,
    },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Customer: {
      screen: CustomerScreen,
    },
    Patrimony: {
      screen: PatrimonyScreen,
    },
    Connectivity: {
      screen: ConnectivityScreen,
    },
    Partitions: {
      screen: Partitions,
    },
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#3a64b1',
      },
    },
  },
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    stackConnectivity: {
      screen: stackConnectivity,
    },
    PatrimonyCreate: {
      screen: PatrimonyCreate,
    },
    PatrimonyCreateSuccess: {
      screen: PatrimonyCreateSuccess,
    },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

export default createAppContainer(RootStack);
