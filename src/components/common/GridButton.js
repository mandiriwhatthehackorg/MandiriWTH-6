import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { Icon } from 'native-base';

export class GridButton extends Component {
  render() {
    const { icon, iconColor, text, style, onPress, imageURI, useImage, iconType } = this.props;

    return (
      <TouchableOpacity
        style={[styles.card, style]}
        onPress={onPress}
      >
        {
          useImage ?
            <Image style={styles.imageStyle} source={imageURI} /> :
            <Icon name={icon} style={{ color: iconColor }} type={iconType} />
        }
        <Text style={styles.textStyle}> {text} </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 100,
    borderRadius: 7,
    marginHorizontal: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2, height: 0
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    // Android
    elevation: 3,
  },
  textStyle: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 11,
    fontFamily: 'Roboto-Regular'
  },
  imageStyle: {
    height: 40,
    width: 40,
    marginBottom: 6,
  }
});
