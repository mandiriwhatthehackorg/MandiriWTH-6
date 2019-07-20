import React, { Component } from 'react';
import { StyleSheet, Linking } from 'react-native';
import { Container, Content, List, ListItem, Text, Body, Right, Icon } from 'native-base';
import { HeaderStyled } from '../components/common/';

export class NotificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [
        {
          message: 'Artikel Baru nih : Ciri-Ciri Undangan Wawancara Kerja Palsu',
          destination: 'Artikel'
        },
        {
          message: 'Awas!, pengeluaran kamu membludak',
          destination: 'Home'
        },
      ],
    };
  }

  renderList() {
    return (
      <List>
        { this.state.dataArray.map((item) => (
            <ListItem button onPress={() => { this.props.navigation.navigate(item.destination) }}>
              <Body><Text>{item.message}</Text></Body>
              <Right><Icon name="ios-arrow-forward" /></Right>
            </ListItem>
          )) }
      </List>
    );
  }

  render() {
    return (
      <Container>
        <HeaderStyled
          headerText='Notifikasi'
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
