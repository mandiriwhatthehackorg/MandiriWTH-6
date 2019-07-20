import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ImageBackground, Alert, Image, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Header } from 'native-base';
import { LOGIN } from '../assets/icons/';

export class LoginFormScreen extends Component {
  storeData = async () => {
    try {
      await AsyncStorage.setItem('@login', true);
    } catch (e) {
      Alert.alert(
        'Error on login',
        e
      );
    }
  }

  storeDataOnBoarding = async () => {
    try {
      await AsyncStorage.setItem('@onboarding', true);
    } catch (e) {
      Alert.alert(
        'Error on login',
        e
      );
    }
  }

  goLogin = () => {
    this.storeData();
    this.props.navigation.navigate('Main');
  }

  render() {
    return (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}
        >
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <Image source={LOGIN} style={{ width: 100, height: 100, marginVertical: 8 }} />
          <Text style={styles.textStyleDesc}> Lorem Ipsum </Text>
          <Button mode="contained" onPress={this.goLogin} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>Login</Text>
          </Button>
          <Button mode="contained" onPress={() => { console.log('Register') }} style={[styles.buttonStyle, styles.registerButtonStyle]}>
            <Text style={[styles.textStyle, { color: '#4F4F4F' }]}>Register</Text>
          </Button>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 25,
    marginHorizontal: 10,
    width: '80%',
    backgroundColor: '#2F80ED',
    height: 40
  },
  textStyleDesc: {
    color: 'black',
    marginVertical: 10,
    fontSize: 25,
    fontFamily: 'Lato-Regular'
  },
  textStyle: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Lato-Regular'
  },
  registerButtonStyle: {
    borderColor: '#2D9CDB',
    borderWidth: 1,
    backgroundColor: 'white',
    marginTop: 25
  }
  // Lato, 4F4F4F, 14
});
