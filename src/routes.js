// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'native-base';
import {
  createBottomTabNavigator, createAppContainer, createStackNavigator
} from 'react-navigation';
import {
  HomeScreen, ProfileScreen, PeopleListScreen, AnimatableScreen
} from './screens';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  PeopleList: PeopleListScreen,
  Animatable: AnimatableScreen
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

export const AppContainer = createAppContainer(TabNavigator);
