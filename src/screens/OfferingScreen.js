import React, { Component } from 'react';
import { StyleSheet, Linking } from 'react-native';
import { Container, Content, List, ListItem, Text, Body, Right, Icon, Spinner } from 'native-base';
import axios from 'axios';
import { HeaderStyled } from '../components/common/';

export class OfferingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jwt: '',
      dataArray: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchJWT().then((res) => {
      console.log({ res });
      this.setState({ jwt: res.data.jwt });
      this.fetchCreditCard().then((response) => {
        console.log({ response });
        var productList = response.data.Response.products.productDetails;
        this.setState({ dataArray: productList });
        this.setState({ loading: false });
      });
    });
  }

  fetchJWT() {
    return axios.request({
      method: 'GET',
      url: 'http://apigateway.mandiriwhatthehack.com/rest/pub/apigateway/jwt/getJsonWebToken?app_id=79e80865-423f-4bc8-b9ed-a2fa0338e3c1',
      headers: {
        Authorization: 'Basic NzdhZjE4OGItMjMyMy00OTNkLTg4NTUtOTFjOWM5NjM2YTRlOmU3ZDRjZGFkLWU3MjEtNDFiMy05ZWExLWJhMmI5ODRmYWVlZg==',
        "Content-Type": 'application/json',
        'Accept': 'application/json'
      }
    });
  }

  fetchCreditCard() {
    return axios.request({
      method: 'GET',
      url: `http://apigateway.mandiriwhatthehack.com/gateway/ProductAPI/1.0/product/creditCard`,
      headers: {
        Authorization: `Bearer ${this.state.jwt}`,
        'Content-Type': 'application/json',
      }
    });
  }

  fetchProductType() {
    return axios.request({
      method: 'GET',
      url: `http://apigateway.mandiriwhatthehack.com/gateway/ServicingAPI/1.0/customer/casa/${this.state.accountNumber}/transaction`,
      headers: {
        Authorization: `Bearer ${this.state.jwt}`,
        'Content-Type': 'application/json',
      }
    });
  }

  fetchProductByType(type) {
    var url = 'https://apigateway.mandiriwhatthehack.com/gateway/ProductAPI/1.0/product/';
    if (type === "Saving Account") {
      url = 'https://apigateway.mandiriwhatthehack.com/gateway/ProductAPI/1.0/product/savingAccount';
    }
    if (type === "Time Deposit") {
      url = 'https://apigateway.mandiriwhatthehack.com/gateway/ProductAPI/1.0/product/timeDeposit';
    }
    if (type === "Debit Card") {
      url = 'https://apigateway.mandiriwhatthehack.com/gateway/ProductAPI/1.0/product/debitCard';
    }
    if (type === "Credit Card") {
      url = 'https://apigateway.mandiriwhatthehack.com/gateway/ProductAPI/1.0/product/creditCard';
    }
    if (type === "Personal Loan") {
      url = 'https://apigateway.mandiriwhatthehack.com/gateway/ProductAPI/1.0/product/personalLoan';
    }
    return axios.request({
      method: 'GET',
      url,
      headers: {
        Authorization: `Bearer ${this.state.jwt}`,
        'Content-Type': 'application/json',
      }
    });
  }

  renderList() {
    if (this.state.loading) {
      return (<Spinner color='#2F80ED' />);
    }
    return (
      <List>
        <ListItem itemDivider>
          <Text>Credit Card</Text>
        </ListItem>
        { this.state.dataArray.map((item) => (
            <ListItem button>
              <Body><Text>{item.name}</Text></Body>
            </ListItem>
          )) }
      </List>
    );
  }

  render() {
    return (
      <Container>
        <HeaderStyled
          headerText='Penawaran'
          navigation={this.props.navigation}
          headerStyle={styles.headerStyle}
          iosBarStyle='dark-content'
          androidStatusBarColor='white'
        />
        <Content>
          { this.renderList() }
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'white',
    borderBottomWidth: 0,
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2, height: 0
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    // Android
    elevation: 3
  }
});
