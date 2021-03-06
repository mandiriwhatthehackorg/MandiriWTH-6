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
  APITestScreen, TableScreen, LoginScreen, OnBoardingScreen,
  SwiperScreen, ArticleListScreen, ArticleScreen, OfferingScreen,
  NotificationScreen, SurveyScreen, SurveyResult,
  DetailAnggaran1, DetailAnggaran2,
  Impian1, Impian2,
  ArusKas1, ArusKas2, ArusKas3,
  Tagihan1, Tagihan2, Tagihan3,
  Portofolio
} from './screens';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  PeopleList: PeopleListScreen,
  Animatable: AnimatableScreen,
  APITest: APITestScreen,
  TableScreen,
  Login: LoginScreen,
  SwiperScreen,
  ArticleScreen,
  SurveyScreen,
  SurveyResult,
  DetailAnggaran1, DetailAnggaran2,
  Impian1, Impian2,
  ArusKas1, ArusKas2, ArusKas3,
  Tagihan1, Tagihan2, Tagihan3,
  Portofolio
}, {
  headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
});

const TabNavigator = createBottomTabNavigator(
  {
    Notifikasi: NotificationScreen,
    Penawaran: OfferingScreen,
    Home: HomeStack,
    Artikel: ArticleListScreen,
    Pengaturan: ProfileScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        // let IconComponent = Ionicons;
        let iconName;
        let typeIcon;
        if (routeName === 'Home') {
          iconName = 'th-large';
          typeIcon = 'FontAwesome';
        } else if (routeName === 'Notifikasi') {
          iconName = 'md-notifications-outline';
          typeIcon = 'Ionicons'
        } else if (routeName === 'Penawaran') {
          iconName = 'local-offer';
          typeIcon = 'MaterialIcons';
        } else if (routeName === 'Artikel') {
          iconName = 'news';
          typeIcon = 'Entypo';
        } else if (routeName === 'Pengaturan') {
          iconName = 'ios-settings';
          typeIcon = 'Ionicons';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} type={typeIcon} style={{ color: tintColor }} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#0A5C78',
      inactiveTintColor: '#828282',
      labelStyle: {
        fontFamily: 'Lato-Regular',
        fontSize: 12
      },
    },
    initialRouteName: 'Home'
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
