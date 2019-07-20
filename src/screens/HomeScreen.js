import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import {
  Container, Header, Item,
  Left, Right, Body, Icon, Content
} from 'native-base';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import { ProgressBar, Colors } from 'react-native-paper';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { RowStyled, GridButton } from '../components/common/';

var { height, width } = Dimensions.get('window');

export class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      progress: 20,
      progressWithOnComplete: 0,
      progressCustomized: 0,
    };
  }

  increase = (key, value) => {
    this.setState({
      [key]: this.state[key] + value,
    });
  }

  componentDidMount() {
    this.setState({
      items: [
        { title: 'Hello Swiper', css: styles.slide1 },
        { title: 'Beautiful', css: styles.slide2 },
        { title: 'And simple', css: styles.slide3 }
      ]
    })
  }

  goToList = () => { this.props.navigation.navigate('PeopleList'); }

  renderFirstPage() {
    const barWidth = Dimensions.get('screen').width - 30;

    return (
      <View style={styles.containerInsideStyle}>
        <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#27AE60', '#56CCF2']} style={styles.cardStyle}>
          <Text style={{ color: 'white', fontFamily: 'Lato-Regular', marginVertical: 5 }}>Icon</Text>
          <Text style={{ color: 'white', fontSize: 9, fontFamily: 'Lato-Regular', marginVertical: 5 }}>ARUS KAS</Text>
          <View style={{ flexDirection: 'column', alignSelf: 'flex-start', alignItems: 'flex-start', justifyContent: 'flex-start', marginVertical: 8 }}>
            <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Lato-Bold', marginVertical: 2 }}>Pendapatan - Pengeluaran</Text>
            <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Lato-Bold', marginVertical: 2 }}>Rp -500.000</Text>
            <Text style={{ color: 'white', fontSize: 10, fontFamily: 'Lato-Regular', marginTop: 10 }}>Besar pasak daripada tiang</Text>
          </View>
        </LinearGradient>
        <View
          style={{ marginVertical: 15, borderBottomWidth: 0.8, borderBottomColor: 'blue', width: '100%', height: 15 }}
        />
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'black', fontSize: 18, fontFamily: 'Lato-Regular', marginVertical: 5 }}>ARUS KAS</Text>
          <View style={{ flexDirection: 'column', marginVertical: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
              <Text style={{ fontColor: 'black', fontSize: 15, fontFamily: 'Lato' }}>Pendapatan</Text>
              <Text style={{ fontColor: 'black', fontSize: 15, fontFamily: 'Lato' }}>Rp 3.000.000</Text>
            </View>
            <ProgressBarAnimated
              width={barWidth}
              value={this.state.progress}
              backgroundColorOnComplete="#6CC644"
            />
          </View>
          <View style={{ flexDirection: 'column', marginVertical: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
              <Text style={{ fontColor: 'black', fontSize: 15, fontFamily: 'Lato' }}>Pendapatan</Text>
              <Text style={{ fontColor: 'black', fontSize: 15, fontFamily: 'Lato' }}>Rp 3.000.000</Text>
            </View>
            <ProgressBarAnimated
              width={barWidth}
              value={this.state.progress}
              backgroundColorOnComplete="#6CC644"
            />
          </View>
          <View style={{ flexDirection: 'column', marginVertical: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
              <Text style={{ fontColor: 'black', fontSize: 15, fontFamily: 'Lato' }}>Pendapatan</Text>
              <Text style={{ fontColor: 'black', fontSize: 15, fontFamily: 'Lato' }}>Rp 3.000.000</Text>
            </View>
            <ProgressBarAnimated
              width={barWidth}
              value={this.state.progress}
              backgroundColorOnComplete="#6CC644"
            />
          </View>
        </View>
      </View>
    );
  }

  render() {
    const swiperHeight = 0.75 * height;
    return (
      <Container>
        <Header
          transparent style={styles.headerStyle}
          iosBarStyle="dark-content"
          androidStatusBarColor="white"
        >
          <Left
            style={{
              flex: 1
            }}
          />
        <Body style={{ flex: 1, alignItems: 'center' }}>
            <Text
              style={{
                fontFamily: "Muli-Bold",
                color: "#142082",
                fontSize: 20
              }}
            >
              LOGO
            </Text>
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>
        <Content contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
          <View style={{ height: swiperHeight }}>
            <Swiper height={swiperHeight} width={width}>
              {this.renderFirstPage()}
              <View style={styles.containerInsideStyle}>
                <View style={styles.cardStyle} />
              </View>
              <View style={styles.containerInsideStyle}>
                <View style={styles.cardStyle} />
              </View>
            </Swiper>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  searchBarStyle: {
      marginTop: 5,
      borderRadius: 10,
      backgroundColor: 'white',
      marginHorizontal: 8,
      marginVertical: 10,
      paddingHorizontal: 10,
      shadowOffset: {
        width: 1, height: 0
      },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      // Android
      elevation: 3
    },
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
    },
    containerInsideStyle: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    cardStyle: {
      borderRadius: 25,
      height: height * 0.25,
      width: width * 0.9,
      marginHorizontal: 15,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      paddingHorizontal: 10
    }
});
