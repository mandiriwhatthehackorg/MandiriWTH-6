import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import * as IM from '../assets/images/';

export class ArusKas2 extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => { this.props.navigation.navigate('ArusKas3')}} style={{ backgroundColor: 'red', flex: 1, alignItems: 'center' }}>
        <Image source={IM.ArusKas2} style={{ width: '100%', height: '100%', flex: 1 }} resizeMode={'stretch'} />
      </TouchableOpacity>
    );
  }
}
