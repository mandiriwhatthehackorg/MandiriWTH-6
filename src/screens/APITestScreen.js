import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
// import * as Animatable from 'react-native-animatable';
import { Container, Content, Header } from 'native-base';
import axios from 'axios';

export class APITestScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      jwt: '',
      accountNumber: '1111006397979'
    };
  }

  fetchJWT() {
    return axios.request({
      method: 'GET',
      url: 'http://arayan.aliakbr.com/hackathon/getjwt'
    });
  }

  fetchAccountInfo() {
    return axios.request({
      method: 'GET',
      url: `http://apigateway.mandiriwhatthehack.com/gateway/ServicingAPI/1.0/customer/casa/${this.state.accountNumber}/balance`,
      headers: {
        Authorization: `Bearer ${this.state.jwt}`,
        'Content-Type': 'application/json',
      }
    });
  }

  componentDidMount() {
    this.fetchJWT().then((res) => {
      console.log(res.data.jwt);
      this.setState({ jwt: res.data.jwt });
      this.fetchAccountInfo().then(response => {
        console.log(response.data);
        this.setState({ data: response.data });
      }).catch((error) => {
        console.log(error);
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <Container>
        <Header />
        <Content style={{ flex: 1 }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 15 }}>Account Info : { this.state.data.toString() }</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    shadowOffset: {
      width: 1, height: 0
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // Android
    elevation: 3,
    height: 50,
    width: 50
  }
});
