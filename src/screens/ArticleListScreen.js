import axios from 'axios';
import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  View
} from 'react-native';
import { Container, Spinner } from 'native-base';
import { CardStyled, HeaderStyled  } from '../components/common';
// import { ROOT_URL, MAIN_SERVER_PORT, CHAT_SERVER_PORT } from '../config/server_conn';

export class ArticleListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [
        { title: 'Jangan sampai Ketipu, Inilah Ciri-Ciri Undangan Wawancara Kerja Palsu', publish_date: 'Minggu, 21-07-2019', content: "<p>Lorem Ipsum</p>", featured_image: "http://www.athens.edu/wp-content/uploads/2016/02/hrm.jpg" },
        { title: 'Lorem Ipsum', publish_date: 'Sabtu, 20-07-2019', content: "<p>Lorem Ipsum</p>", featured_image: "http://www.athens.edu/wp-content/uploads/2016/02/hrm.jpg" }
      ],
      token: '',
      user: {},
      loading: false
    };
  }

  componentDidMount() {
    this.mounted = true;

  }

  componentWillUnmount() {
    this.mounted = false;
  }

  // fetchData() {
  //   axios.request({
  //     method: 'GET',
  //     url: `${ROOT_URL + MAIN_SERVER_PORT}/news/`,
  //     headers: {
  //       'x-access-token': this.state.token,
  //     }
  //   })
  //   .then((response) => {
  //     if (this.mounted) this.setState({ news: response.data.data });
  //     this.setState({ loading: false });
  //   })
  //   .catch((err) => {
  //     console.log(`Rejection on Promise on API : ${err}`);
  //   });
  // }

  renderItem(item) {
    return (
      <CardStyled
        navigation={this.props.navigation}
        item={item}
      />
    );
  }

  renderList() {
    if (this.state.loading) {
      return <Spinner size='large' />;
    }
    return (
      <FlatList
        style={styles.list}
        data={this.state.news}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (<View style={styles.separator} />)}
        renderItem={({ item }) => this.renderItem(item)}
      />
    );
  }

  render() {
    return (
      <Container styles={styles.container}>
        <HeaderStyled
          headerStyle={{ backgroundColor: 'white' }}
          headerText='Article'
          navigation={this.props.navigation}
        />
        { this.renderList() }
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  list: {
    paddingHorizontal: 18,
    backgroundColor: '#fff9f9'
  },
  separator: {
    marginTop: 8,
  }
});
