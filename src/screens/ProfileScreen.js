import React, { Component } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert
} from 'react-native';
import {
  Button,
  Content,
  Container,
  List,
  ListItem
} from 'native-base';
import {
  HeaderStyled,
} from '../components/common';
import {
  DOLLAR_ICON
} from '../assets/icons/';
import AsyncStorage from '@react-native-community/async-storage';

export class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      imageURI: 'https://randomuser.me/api/portraits/men/32.jpg',
      access_token: ''
    };
  }

  eraseData = async () => {
    try {
      await AsyncStorage.removeItem('@login');
      this.props.navigation.navigate('Login');
    } catch (e) {
      Alert.alert(
        'Error on logout',
        e
      );
    }
  }

  goLogOut = () => {
    this.eraseData();
  }

  render() {
    console.log(this.state.user);
    return (
      <Container>
          <HeaderStyled
            navigation={this.props.navigation}
            headerStyle={styles.headerStyle}
          />
          <Content>
            <View style={styles.header}>
              <View style={styles.headerContent}>
                  <Image
                    style={styles.avatar}
                    source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                  />
                <Text style={styles.name}>Anonymous</Text>
                  <Text style={styles.userInfo}>+628111000000</Text>
                  <Text style={styles.userInfo}>anonymous@animus.com</Text>
              </View>
            </View>
            <List style={styles.list}>
              <ListItem button style={styles.listItem}>
                  <Image style={styles.iconStyle} source={DOLLAR_ICON} />
                  <Text style={{ fontFamily: 'Muli-Regular' }}>Set Goals</Text>
              </ListItem>
            </List>
            <Button
              block
              style={styles.buttonStyle}
              onPress={this.goLogOut}
            >
              <Text style={styles.buttonText}>Log Out</Text>
            </Button>
          </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'white'
  },
  header: {
    backgroundColor: 'white',
    borderBottomColor: '#d6d7da',
    borderBottomWidth: 0.5,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // Android
    elevation: 5
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#000000',
    // fontWeight: '300',
    fontFamily: 'Lato-Regular',
  },
  userInfo: {
    fontSize: 16,
    color: '#778899',
    // fontWeight: '100',
    fontFamily: 'Lato-Light',
  },
  buttonStyle: {
    marginHorizontal: 10,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: 6,
    backgroundColor: '#0A5C78',
    fontFamily: 'Roboto-Regular',
  },
  buttonText: {
    color: 'white'
  },
  /* Menu List */
  list: {
    flex: 1,
  },
  listItem: {
    flex: 1
  },
  iconStyle: {
    height: 20,
    width: 20,
    marginRight: 10,
  }
});
