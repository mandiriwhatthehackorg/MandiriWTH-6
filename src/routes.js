// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'native-base';
import {
  createBottomTabNavigator, createAppContainer, createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';
import {
  HomeScreen, ProfileScreen, PeopleListScreen, AnimatableScreen,
  APITestScreen, TableScreen, LoginScreen, OnBoardingScreen
} from './screens';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  PeopleList: PeopleListScreen,
  Animatable: AnimatableScreen,
  APITest: APITestScreen,
  TableScreen,
  Login: LoginScreen,
}, {
  headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Profile: ProfileScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        // let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'ios-home';
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Profile') {
          iconName = 'ios-contact';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} style={{ color: tintColor }} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#142082',
      inactiveTintColor: 'black',
    },
  }
);

const MainStack = createStackNavigator({
  Tab: TabNavigator
}, {
  headerMode: 'none',
    navigationOptions: {
      initialRouteName: 'Login',
      headerVisible: false,
    }
});

const LoginStack = createSwitchNavigator({
  Login: LoginScreen,
  Main: MainStack
}, {
  headerMode: 'none',
    navigationOptions: {
      initialRouteName: 'Login',
      headerVisible: false,
    }
});

const OnBoardingStack = createSwitchNavigator({
  OnBoarding: OnBoardingScreen,
  Login: LoginScreen,
  Main: MainStack
}, {
  headerMode: 'none',
    navigationOptions: {
      initialRouteName: 'OnBoarding',
      headerVisible: false,
    }
});

export const AppContainer = createAppContainer(TabNavigator);
export const LoginContainer = createAppContainer(LoginStack);
export const OnBoardingContainer = createAppContainer(OnBoardingStack);
