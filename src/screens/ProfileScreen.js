import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Container, Header, Title, Content,
  Left, Right, Body
} from 'native-base';

export class ProfileScreen extends Component {
  storeData = async () => {
    try {
      await AsyncStorage.removeItem('@login');
      this.props.navigation.navigate('Login');
    } catch (e) {
      Alert.alert(
        'Error on login',
        e
      );
    }
  }

  goLogOut = () => {
    this.storeData();
  }

  render() {
    return (
      <Container>
        <Header
          transparent
          iosBarStyle="dark-content"
          androidStatusBarColor="white"
        >
          <Left />
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Button icon="add-a-photo" mode="contained" onPress={this.goLogOut} style={{ backgroundColor: 'red', marginHorizontal: 10, width: '80%' }}>
            Log Out
          </Button>
        </Content>
      </Container>
    );
  }
}
