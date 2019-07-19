import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import {
  Container, Header, Item,
  Left, Right, Body, Icon, Input, Content
} from 'native-base';
import { RowStyled, GridButton } from '../components/common/';

export class HomeScreen extends Component {
  goToList = () => { this.props.navigation.navigate('PeopleList'); }

  render() {
    return (
      <Container>
        <Header
          transparent style={styles.headerStyle}
          iosBarStyle="dark-content"
          androidStatusBarColor="white"
        >
          <Left
            style={{
              flex: 2, alignItems: 'center', marginRight: 10
            }}
          >
            <Text
              style={{
                fontFamily: "Muli-Bold",
                color: "#142082",
                fontSize: 20
              }}
            >
              Demo Application
            </Text>
          </Left>
          <Body style={{ flex: 1 }} />
          <Right style={{ flex: 1 }} />
        </Header>
        <Content contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
          <View style={styles.searchBarStyle}>
            <Item style={{ borderBottomWidth: 0 }}>
              <Input placeholder="Bantuan pekerjaan apa yang anda cari?" style={{ fontSize: 12 }} />
              <TouchableOpacity onPress={this.goToList}>
                <Icon name="ios-search" style={{ alignSelf: 'center', fontSize: 18 }} />
              </TouchableOpacity>
            </Item>
          </View>
          <View>
              <RowStyled>
                <GridButton
                  icon={'medkit'}
                  iconColor={'#142082'}
                  text='List'
                  onPress={this.goToList}
                />
                <GridButton
                  icon={'shirt'}
                  iconColor={'#142082'}
                  text='Animatable'
                  onPress={() => { this.props.navigation.navigate('Animatable')}}
                />
                <GridButton
                  icon={'face'}
                  iconColor={'#142082'}
                  text='Feature 1'
                  iconType={'MaterialIcons'}
                  onPress={this.goToList}
                />
              </RowStyled>
              <RowStyled>
                <GridButton
                  icon={'gavel'}
                  iconColor={'#142082'}
                  text='Feature 2'
                  iconType={'MaterialIcons'}
                  onPress={this.goToList}
                />
                <GridButton
                  icon={'car'}
                  iconColor={'#142082'}
                  text='Feature 3'
                  iconType={'FontAwesome5'}
                  onPress={this.goToList}
                />
                <GridButton
                  icon={'broom'}
                  iconColor={'#142082'}
                  text='Feature 4'
                  iconType={'FontAwesome5'}
                  onPress={this.goToList}
                />
              </RowStyled>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  searchBarStyle: {
      marginTop: 5,
      borderRadius: 10,
      backgroundColor: 'white',
      marginHorizontal: 8,
      marginVertical: 10,
      paddingHorizontal: 10,
      shadowOffset: {
        width: 1, height: 0
      },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      // Android
      elevation: 3
    },
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
