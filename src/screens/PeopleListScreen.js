import React, { Component } from 'react';
import { StyleSheet, Linking } from 'react-native';
import { Container, Content, List, ListItem, Text, Body, Right, Icon } from 'native-base';
import { HeaderStyled } from '../components/common/';

export class PeopleListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [
        {
          title: 'Joko',
          phone: '+628111237776'
        },
        {
          title: 'Bambang',
          phone: '+628111237776'
        },
        {
          title: 'Sukrii',
          phone: '+628111237776'
        },
      ],
    };
  }

  renderList() {
    return (
      <List>
        { this.state.dataArray.map((item) => (
            <ListItem button onPress={() => { Linking.openURL(`tel://${item.phone}`); }}>
              <Body><Text>{item.title}</Text></Body>
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
          headerText='Hasil Pencarian'
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
