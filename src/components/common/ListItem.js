import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

export class ListItem extends Component {
  goToStatusPage = () => {
    this.props.navigation.navigate(this.props.nextNavigation, {
      item: this.props.item,
      onGoBack: this.props.onGoBack
    });
  }

  render() {
    const {
      iconName,
      iconStyle,
      titleText,
      subtitleText
    } = this.props;
    return (
      <TouchableOpacity
        style={styles.listItemContainer}
        onPress={this.goToStatusPage}
      >
        <Icon style={[styles.badgeStyle, iconStyle]} name={iconName} />
        <View style={styles.listInformationContainer}>
          <Text style={styles.titleStyle}>{titleText}</Text>
          <Text style={styles.createdAtStyle}>{subtitleText}</Text>
        </View>
        <Icon style={styles.iconStyle} name="ios-arrow-forward" />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 8
  },
  listInformationContainer: {
    flexDirection: 'column',
    flex: 10,
    alignItems: 'flex-start',
    marginHorizontal: 5,
    marginLeft: 8
  },
  badgeStyle: {
    flex: 1,
    marginLeft: 5,
    marginHorizontal: 5,
    alignSelf: 'flex-start',
  },
  iconStyle: {
    flex: 1,
    marginHorizontal: 5,
    alignSelf: 'center',
    marginLeft: 10,
    color: '#40130E',
  },
  createdAtStyle: {
    fontSize: 10,
    // fontWeight: '300',
    fontFamily: 'Muli-Light'
  },
  titleStyle: {
    fontSize: 15,
    // fontWeight: '400',
    fontFamily: 'Muli-Regular'
  }
});
