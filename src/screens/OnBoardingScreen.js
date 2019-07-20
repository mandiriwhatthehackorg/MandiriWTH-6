import React, { Component } from 'react';
import { Alert, StatusBar } from 'react-native';
import { Button, Icon, Text } from 'native-base';
import Onboarding from 'react-native-onboarding-swiper';

export class OnBoardingScreen extends Component {
  render() {
    return (
      <Onboarding
        showDone={false}
        onSkip={() => {
          // Alert.alert('Skipped')
          this.props.navigation.navigate('Login');
        }}
        pages={[
          {
            title: 'Hey!',
            subtitle: 'Welcome to Thruu.id!',
            backgroundColor: '#003c8f',
            image: (
              <Icon
                name="hand-peace-o"
                type="font-awesome"
                size={100}
                color="white"
              />
            ),
          },
          {
            title: 'Send Messages',
            subtitle: 'You can reach everybody with us',
            backgroundColor: '#5e92f3',
            image: (
              <Icon
                name="paper-plane-o"
                type="FontAwesome5"
                style={{
                  color: 'white',
                  fontSize: 100
                }}
              />
            ),
          },
          {
            title: 'Get Notified',
            subtitle: 'We will send you notification as soon as something happened',
            backgroundColor: '#1565c0',
            image: (
              <Icon name="bell-o" type="FontAwesome5" style={{ fontSize: 100, color: 'white' }} />
            ),
          },
          {
            title: "That's Enough",
            subtitle: (
              <Button
                title={'Get Started'}
                style={{ marginTop: 20, backgroundColor: 'white', borderRadius: 5, alignSelf: 'center' }}
                onPress={() => {
                  // Alert.alert('done';
                  // StatusBar.setBarStyle('default');
                  this.props.navigation.navigate('Login');
                }}
              >
                <Text style={{ color: '#003c8f' }}>Get's Started</Text>
              </Button>
            ),
            backgroundColor: '#003c8f',
            image: (
              <Icon name="rocket" type="font-awesome" size={100} color="white" />
            ),
          },
        ]}
      />
    );
  }
}
