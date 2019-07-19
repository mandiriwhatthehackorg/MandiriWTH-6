import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export class RowStyled extends Component {
  render() {
    return (
      <View style={styles.row}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginVertical: 5
  }
});
