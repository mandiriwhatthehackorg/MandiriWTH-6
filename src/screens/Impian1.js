import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import * as IM from '../assets/images/';

export class Impian1 extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => { this.props.navigation.navigate('Impian2')}} style={{ backgroundColor: 'red', flex: 1, alignItems: 'center' }}>
        <Image source={IM.Impian1} style={{ width: '100%', height: '100%', flex: 1 }} resizeMode={'stretch'} />
      </TouchableOpacity>
    );
  }
}
