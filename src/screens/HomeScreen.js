import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions, ScrollView } from 'react-native';
import {
  Container, Header, Item,
  Left, Right, Body, Icon, Content, Spinner
} from 'native-base';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import { ProgressBar, Colors, Button } from 'react-native-paper';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import axios from 'axios';
import { RowStyled, GridButton } from '../components/common/';

let { height, width } = Dimensions.get('window');

export class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      progress: 20,
      progressWithOnComplete: 0,
      progressCustomized: 0,
      loading: true,
      accountNumber: '1111006397979',
      transactions: []
    };
  }

  increase = (key, value) => {
    this.setState({
      [key]: this.state[key] + value,
    });
  }

  componentDidMount() {
    this.fetchJWT().then((res) => {
      console.log({ res });
      this.setState({ jwt: res.data.jwt });
      this.fetchTransaction().then((response) => {
        console.log({ response });
        this.setState({ transactions: response.data.Response.transactions });
        this.setState({ loading: false });
      });
    });
  }

  fetchJWT() {
    return axios.request({
      method: 'GET',
      url: 'http://apigateway.mandiriwhatthehack.com/rest/pub/apigateway/jwt/getJsonWebToken?app_id=79e80865-423f-4bc8-b9ed-a2fa0338e3c1',
      headers: {
        Authorization: 'Basic NzdhZjE4OGItMjMyMy00OTNkLTg4NTUtOTFjOWM5NjM2YTRlOmU3ZDRjZGFkLWU3MjEtNDFiMy05ZWExLWJhMmI5ODRmYWVlZg==',
        "Content-Type": 'application/json',
        'Accept': 'application/json'
      }
    });
  }

  fetchTransaction() {
    return axios.request({
      method: 'GET',
      url: `http://apigateway.mandiriwhatthehack.com/gateway/ServicingAPI/1.0/customer/casa/${this.state.accountNumber}/transaction`,
      headers: {
        Authorization: `Bearer ${this.state.jwt}`,
        'Content-Type': 'application/json',
      }
    });
  }

  goToList = () => { this.props.navigation.navigate('PeopleList'); }

  renderArusKas() {
    const barWidth = Dimensions.get('screen').width - 30;
    if (this.state.loading) {
      return (<Spinner color='#2F80ED' />);
    }
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
          style={{ marginVertical: 15, borderBottomWidth: 0.8, borderBottomColor: '#E0E0E0', width: '100%', height: 1 }}
        />
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'black', fontSize: 18, fontFamily: 'Lato-Regular', marginVertical: 5 }}>ARUS KAS</Text>
          <View style={{ flexDirection: 'column', marginVertical: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
              <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Lato' }}>Pendapatan</Text>
              <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Lato' }}>Rp 3.000.000</Text>
            </View>
            <ProgressBarAnimated
              width={barWidth}
              value={this.state.progress}
              backgroundColorOnComplete="#27AE60"
              backgroundColor="#27AE60"
              borderColor="white"
              borderRadius={0}
            />
          </View>
          <View style={{ flexDirection: 'column', marginVertical: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
              <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Lato' }}>Pengeluaran</Text>
              <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Lato' }}>Rp 3.000.000</Text>
            </View>
            <ProgressBarAnimated
              width={barWidth}
              value={this.state.progress}
              backgroundColor="#EB5757"
              borderColor="white"
              borderRadius={0}
            />
          </View>
          <Button mode="contained" onPress={() => { console.log('Register'); }} style={[styles.buttonStyle, { backgroundColor: '#56CCF2', marginTop: 15 }]}>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontFamily: 'Lato-Regular'
              }}>Detail</Text>
          </Button>
        </View>
      </View>
    );
  }

  renderIkhtisar() {
    const barWidth = Dimensions.get('screen').width - 30;
    if (this.state.loading) {
      return (<Spinner color='#2F80ED' />);
    }
    return (
      <View style={styles.containerInsideStyle}>
        <LinearGradient start={{x: 0.3, y: 0.4}} end={{x: 1, y: 0.2}} colors={['#56CCF2', '#83B3CF', '#FF7070']} style={styles.cardStyle}>
          <Text style={{ color: 'white', fontFamily: 'Lato-Regular', marginVertical: 5 }}>Icon</Text>
          <Text style={{ color: 'white', fontSize: 9, fontFamily: 'Lato-Regular', marginVertical: 5 }}>IKTHISAR</Text>
          <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Lato-Bold', marginVertical: 5 }}>Rp 18.000.000</Text>
          <View style={{ flexDirection: 'column', alignSelf: 'flex-start', alignItems: 'flex-start', justifyContent: 'flex-start', marginVertical: 8 }}>
            <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Lato-Bold', marginVertical: 2 }}>Pendapatan - Pengeluaran</Text>
            <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Lato-Bold', marginVertical: 2 }}>Rp -500.000</Text>
            <Text style={{ color: 'white', fontSize: 10, fontFamily: 'Lato-Regular', marginTop: 10 }}>Besar pasak daripada tiang</Text>
          </View>
        </LinearGradient>
        <View
          style={{ marginVertical: 15, borderBottomWidth: 0.8, borderBottomColor: '#E0E0E0', width: '100%', height: 1 }}
        />
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'black', fontSize: 18, fontFamily: 'Lato-Regular', marginVertical: 5 }}>IMPIAN</Text>
          <View style={{ flexDirection: 'column', marginVertical: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
              <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Lato' }}>Nikah Muda</Text>
              <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Lato' }}>70%</Text>
            </View>
            <ProgressBarAnimated
              width={barWidth}
              value={70}
              backgroundColorOnComplete="#BDBDBD"
              backgroundColor="#BDBDBD"
              borderColor="white"
              borderRadius={0}
            />
          </View>
          <View style={{ flexDirection: 'column', marginVertical: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
              <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Lato' }}>Beli Mobil</Text>
              <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Lato' }}>50%</Text>
            </View>
            <ProgressBarAnimated
              width={barWidth}
              value={50}
              backgroundColorOnComplete="#BDBDBD"
              backgroundColor="#BDBDBD"
              borderColor="white"
              borderRadius={0}
            />
          </View>
          <Button mode="contained" onPress={() => { console.log('Register'); }} style={[styles.buttonStyle, { backgroundColor: '#56CCF2', marginTop: 15 }]}>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontFamily: 'Lato-Regular'
              }}>Detail</Text>
          </Button>
        </View>
      </View>
    );
  }

  renderAnggaran() {
    const barWidth = Dimensions.get('screen').width - 30;
    if (this.state.loading) {
      return (<Spinner color='#2F80ED' />);
    }
    return (
      <ScrollView contentContainerStyle={styles.containerInsideStyle}>
        <LinearGradient start={{x: 0.0, y: 0.8}} end={{x: 1, y: 0.1}} colors={['#FF7070', '#FFD860']} style={styles.cardStyle}>
          <Text style={{ color: 'white', fontFamily: 'Lato-Regular', marginVertical: 5 }}>Icon</Text>
          <Text style={{ color: 'white', fontSize: 9, fontFamily: 'Lato-Regular', marginVertical: 5 }}>ANGGARAN</Text>
          <View style={{ flexDirection: 'column', alignSelf: 'flex-start', alignItems: 'flex-start', justifyContent: 'flex-start', marginVertical: 8 }}>
            <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Lato-Bold', marginVertical: 2 }}>Status anggaran kamu bulan Juli kurang Baik</Text>
            <Text style={{ color: 'white', fontSize: 10, fontFamily: 'Lato-Regular', marginTop: 10 }}>Hayo jangan boros</Text>
          </View>
        </LinearGradient>
        <View
          style={{ marginVertical: 15, borderBottomWidth: 0.8, borderBottomColor: '#E0E0E0', width: '100%', height: 1 }}
        />
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'black', fontSize: 18, fontFamily: 'Lato-Regular', marginVertical: 5 }}>STATUS BULAN JULI</Text>
          <AnimatedCircularProgress
              size={220}
              width={20}
              fill={100}
              tintColor="#FFAFA7"
              backgroundColor="#F4FFFC"
              style={{
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10
              }}
            >
              {
                () => (
                  <View style={{ alignSelf: 'center', flexDirection: 'column', justifyContent: 'center' }}>
                    <Text style={{ fontFamily: 'Lato-Bold', color: '#4F4F4F', fontSize: 30, alignSelf: 'center', }}>
                      110 %
                    </Text>
                    <Text style={{ fontFamily: 'Lato-Bold', color: '#828282', fontSize: 12, alignSelf: 'center', marginTop: 8, marginHorizontal: 5, textAlign: 'center' }}>
                      Sisa 0 rupiah untuk 2 hari ke depan
                    </Text>
                  </View>
                )
              }
            </AnimatedCircularProgress>
            <View style={{ flexDirection: 'column', marginVertical: 15 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Lato' }}>Jajan</Text>
                <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Lato' }}>100%</Text>
              </View>
              <ProgressBarAnimated
                width={barWidth}
                value={100}
                backgroundColorOnComplete="#BDBDBD"
                backgroundColor="#BDBDBD"
                borderColor="white"
                borderRadius={0}
              />
            </View>
            <View style={{ flexDirection: 'column', marginVertical: 15 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Lato' }}>Uang Makan</Text>
                <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Lato' }}>100%</Text>
              </View>
              <ProgressBarAnimated
                width={barWidth}
                value={100}
                backgroundColorOnComplete="#BDBDBD"
                backgroundColor="#BDBDBD"
                borderColor="white"
                borderRadius={0}
              />
            </View>
          <Button mode="contained" onPress={() => { console.log('Register'); }} style={[styles.buttonStyle, { backgroundColor: '#56CCF2', marginTop: 15 }]}>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontFamily: 'Lato-Regular'
              }}>Detail</Text>
          </Button>
        </View>
      </ScrollView>
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
            <Swiper height={swiperHeight} width={width} dotColor={'#C4C4C4'} activeDotColor={'#2F80ED'}>
              {this.renderArusKas()}
              {this.renderIkhtisar()}
              {this.renderAnggaran()}
            </Swiper>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 25,
    marginHorizontal: 10,
    width: '100%',
    height: 40
  },
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
