import React, { Component } from 'react';
import {
  Container, Header, Title, Content, Footer, FooterTab,
  Button, Left, Right, Body, Icon, Text
} from 'native-base';
import { HeaderStyled } from '../components/common/';

export class ProfileScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            This is Profile Screen
          </Text>
        </Content>
      </Container>
    );
  }
}
