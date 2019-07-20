import React, { Component } from 'react';
import { Alert, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Spinner } from 'native-base';
import { AppContainer, LoginContainer, OnBoardingContainer } from './routes';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      loading: true,
      onboarding: true
    };
  }

  componentDidMount() {
    this.getLogin();
  }

  getLogin = async () => {
    try {
      const valueOnb = await AsyncStorage.getItem('@onboarding');
      console.log({ valueOnb });
      if (valueOnb !== null) {
        this.setState({ onboarding: false });
        try {
          const value = await AsyncStorage.getItem('@login')
          console.log({ value });
          if (value !== null) {
            // value previously stored
            this.setState({ login: true });
          }
          this.setState({ loading: false });
        } catch (e) {
          console.log(e);
          Alert.alert(
            'error',
            e
          );
        }
      }
      this.setState({ loading: false });
    } catch (a) {
      console.log(a);
      Alert.alert(
        'error onb',
        a
      );
    }
  }


  render() {
    console.disableYellowBox = true;
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Spinner color='#2F80ED' />
        </View>
      );
    }
    if (this.state.onboarding) {
      return (
        <OnBoardingContainer />
      );
    }
    if (this.state.login === false) {
      return (
        <LoginContainer />
      );
    }
    return (
      <AppContainer />
    );
  }
}
