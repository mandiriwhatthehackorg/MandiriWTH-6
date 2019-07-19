import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

export class OnBoardingScreen extends Component {
  render() {
    return (
      <Onboarding
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={require('./images/circle.png')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          }
        ]}
      />
    );
  }
}
