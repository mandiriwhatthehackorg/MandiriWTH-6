// Import libraries
import React, { Component } from 'react';
import { StyleSheet, Text, StatusBar } from 'react-native';
import { Header, Left, Body, Button, Icon, Right } from 'native-base';

export class HeaderStyled extends Component {
  render() {
    const { textStyle, viewStyle, textContainer } = styles;
    const { headerText, headerStyle, iconStyle, headerTextStyle } = this.props;

    return (
      <Header
        transparent
        style={[viewStyle, headerStyle]}
        androidStatusBarColor={this.props.androidStatusBarColor}
        iosBarStyle={this.props.iosBarStyle}
      >
        <Left style={{ flex: 1 }}>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="ios-arrow-back" style={[{ color: '#0A5C78' }, iconStyle]} />
          </Button>
        </Left>
        <Body style={textContainer}>
          <Text style={[textStyle, headerTextStyle]}>{headerText}</Text>
        </Body>
        <Right style={{ flex: 1 }} />
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    borderBottomWidth: 0,
    backgroundColor: '#00cec9'
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  textStyle: {
    fontSize: 15,
    fontFamily: 'Muli-Regular',
  }
});
