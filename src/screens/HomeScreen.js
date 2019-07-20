import React, { Component } from 'react';
import {
  StyleSheet, View, TouchableOpacity, Text,
  Dimensions, ScrollView, Image, FlatList
} from 'react-native';
import {
  Container, Header, Item,
  Left, Right, Body, Icon, Content, Spinner,
  List, ListItem
} from 'native-base';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import { ProgressBar, Colors, Button, Surface } from 'react-native-paper';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import axios from 'axios';
import { RowStyled, GridButton } from '../components/common/';
import { INVESTASI, ARUSKAS, ANGGARAN, IKHTISAR, ANALYSIS,
  DIAGRAM, BIOLOGY, OBLIGASI, PASARUANG, OFFER, APPLOGO,
  SAVEMONEY, GROWTH
 } from '../assets/icons/';

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
      transactions: [],
      dataTagihan: [
        {id: 1, 'type': 'Sewa Rumah', 'fee': 'Rp 5.000.000'},
        {id: 2, 'type': 'KPR', 'fee': 'Rp 4.000.000'},
        {id: 3, 'type': 'KTA', 'fee': 'Rp 500.000'},
        {id: 4, 'type': 'Kredit Mobil', 'fee': 'Rp 1.500.000'}
      ]
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
          <Image source={ARUSKAS} style={{ height: 35, width: 35 }} />
          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Lato-Bold', marginVertical: 5 }}>ARUS KAS</Text>
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
              value={60}
              backgroundColorOnComplete="#27AE60"
              backgroundColor="#27AE60"
              borderColor="white"
              borderRadius={0}
            />
          </View>
          <View style={{ flexDirection: 'column', marginVertical: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
              <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Lato' }}>Pengeluaran</Text>
              <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Lato' }}>Rp 3.500.000</Text>
            </View>
            <ProgressBarAnimated
              width={barWidth}
              value={80}
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
          <Image source={IKHTISAR} style={{ height: 35, width: 35 }} />
          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Lato-Bold', marginVertical: 5 }}>IKTHISAR</Text>
          <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Lato-Bold', marginVertical: 5 }}>Rp 18.000.000</Text>
          <View style={{ flexDirection: 'column', alignSelf: 'flex-start', alignItems: 'flex-start', justifyContent: 'flex-start', marginVertical: 8 }}>
            <View style={{ flexDirection: 'row', paddingHorizontal: 30 }}>
                <View style={{ flex: 1}}><Text style={{ fontFamily: 'Lato-Regular', fontSize: 12, color: 'white'}}>Kas</Text></View>
                <View style={{ flex: 1}}><Text style={{ fontFamily: 'Lato-Regular', fontSize: 12, color: 'white'}}>Rp 10.000.000</Text></View>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 30 }}>
                <View style={{ flex: 1}}><Text style={{ fontFamily: 'Lato-Regular', fontSize: 12, color: 'white'}}>Utang</Text></View>
                <View style={{ flex: 1}}><Text style={{ fontFamily: 'Lato-Regular', fontSize: 12, color: 'white'}}>Rp 2.000.000</Text></View>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 30 }}>
                <View style={{ flex: 1}}><Text style={{ fontFamily: 'Lato-Regular', fontSize: 12, color: 'white'}}>Investasi</Text></View>
                <View style={{ flex: 1}}><Text style={{ fontFamily: 'Lato-Regular', fontSize: 12, color: 'white'}}>Rp 10.000.000</Text></View>
            </View>
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
          <Button mode="contained" onPress={() => { console.log('Register'); }} style={[styles.buttonStyle, { backgroundColor: '#56CCF2', marginTop: 15, justifyContent: 'center' }]}>
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
          <Image source={ANGGARAN} style={{ height: 35, width: 35 }} />
          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Lato-Bold', marginVertical: 5 }}>ANGGARAN</Text>
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

  renderInvestasi() {
    const barWidth = Dimensions.get('screen').width - 30;
    if (this.state.loading) {
      return (<Spinner color='#2F80ED' />);
    }
    return (
      <ScrollView contentContainerStyle={styles.containerInsideStyle}>
        <LinearGradient start={{x: 0.0, y: 0.2}} end={{x: 1, y: 0.1}} colors={['#AAEA6B', '#27AE60']} style={styles.cardStyle}>
          <Image source={INVESTASI} style={{ height: 35, width: 35 }} />
          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Lato-Bold', marginVertical: 5 }}>INVESTASI</Text>
          <View style={{ flexDirection: 'column', alignSelf: 'flex-start', alignItems: 'flex-start', justifyContent: 'flex-start', marginVertical: 8 }}>
            <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Lato-Bold', marginVertical: 2 }}>Pertumbuhan invest kamu:</Text>
            <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Lato-Bold', marginVertical: 2 }}>+ Rp 50.000</Text>
          </View>
        </LinearGradient>
        <View
          style={{ marginVertical: 15, borderBottomWidth: 0.8, borderBottomColor: '#E0E0E0', width: '100%', height: 1 }}
        />
        <View style={{ justifyContent: 'flex-start', marginTop: 8, alignItems: 'flex-start', padding: 10 }}>
          <Text style={{ fontSize: 20, color: '#2D9CDB', alignSelf: 'flex-start', textAlign: 'left', fontFamily: 'Lato-Bold' }}>
            AYO BERINVESTASI,
          </Text>
          <Text style={{ fontSize: 16, color: '#828282', alignSelf: 'flex-start', textAlign: 'left', fontFamily: 'Lato-Regular' }}>
            Investasi dapat memberikan bunga lebih tinggi dari tabungan biasa.
          </Text>
          <TouchableOpacity style={{ flexDirection: 'row', borderColor: '#2D9CDB', borderWidth: 2, height: 100, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 30, paddingVertical: 20, marginTop: 10 }}>
            <View style={{ flex: 1 }}>
              <Image source={ANALYSIS} style={{ width: 41, height: 41 }} />
            </View>
            <View style={{ flexDirection: 'column', flex: 2 }}>
              <Text style={{ color: '#4F4F4F', fontSize: 17, fontFamily: 'Lato-Bold' }}>Bingung mau inves apa?</Text>
              <Text style={{ color: '#4F4F4F', fontSize: 14, fontFamily: 'Lato-Regular' }}>Yuk ikuti survei untuk mengetahui level risiko kamu</Text>
            </View>
            <View style={{ flexDirection: 'column', flex: 1, alignItems: 'flex-end' }}>
              <Icon name="ios-arrow-forward" type="Ionicons" style={{ fontSize: 40, color: '#2D9CDB' }} />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{ marginVertical: 15, borderBottomWidth: 0.8, borderBottomColor: '#E0E0E0', width: '100%', height: 1 }}
        />
        <View style={{ justifyContent: 'flex-start', marginTop: 8, alignItems: 'flex-start', padding: 10 }}>
          <Text style={{ fontSize: 18, color: '#828282', alignSelf: 'flex-start', textAlign: 'left', fontFamily: 'Lato-Bold' }}>
            BANGUN PORTOFOLIO SENDIRI
          </Text>
          <View style={{ paddingVertical: 8, paddingHorizontal: 10, marginTop: 10 }}>
            <View style={{ flexDirection: 'row', width: '100%' }}>
              <TouchableOpacity style={styles.boxStyle}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image source={DIAGRAM} style={styles.imageStyle} />
                  <Text style={styles.labelStyle}> Saham </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxStyle}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image source={OBLIGASI} style={styles.imageStyle} />
                  <Text style={styles.labelStyle}> Obligasi </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxStyle}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image source={BIOLOGY} style={styles.imageStyle} />
                  <Text style={styles.labelStyle}> Syariah </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxStyle}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image source={PASARUANG} style={styles.imageStyle} />
                  <Text style={styles.labelStyle}> Pasar Uang </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', marginTop: 15 }}>
              <TouchableOpacity style={styles.boxStyle}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image source={GROWTH} style={styles.imageStyle} />
                  <Text style={styles.labelStyle}> Reksa </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxStyle}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image source={OFFER} style={styles.imageStyle} />
                  <Text style={styles.labelStyle}> Deposito </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxStyle}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image source={SAVEMONEY} style={styles.imageStyle} />
                  <Text style={styles.labelStyle}> Tabungan Berjangka </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxStyleZero} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }

  renderListTagihan() {
    return (
      <List>
        { this.state.dataTagihan.map((item) => (
            <ListItem>
              <Body><Text style={{ fontSize: 13, fontFamily: 'Lato-Regular', color: '#2F80ED' }}>{item.type}</Text></Body>
              <Right style={{ flex: 2}}><Text style={{ fontSize: 13, fontFamily: 'Lato-Regular', color: '#2F80ED' }}>{item.fee}</Text></Right>
            </ListItem>
          )) }
      </List>
    );
  }

  renderTagihan() {
    const barWidth = Dimensions.get('screen').width - 30;
    if (this.state.loading) {
      return (<Spinner color='#2F80ED' />);
    }
    return (
      <ScrollView contentContainerStyle={styles.containerInsideStyle}>
        <LinearGradient start={{x: 0.0, y: 0.2}} end={{x: 1, y: 0.1}} colors={['#D08BEA', '#FFD860']} style={styles.cardStyle}>
          <Image source={ANGGARAN} style={{ height: 35, width: 35 }} />
          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Lato-Bold', marginVertical: 5 }}>TAGIHAN</Text>
          <View style={{ flexDirection: 'column', alignSelf: 'flex-start', alignItems: 'flex-start', justifyContent: 'flex-start', marginVertical: 8 }}>
            <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Lato-Bold', marginVertical: 2 }}>Tagihan Kamu Bulan Ini</Text>
            <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Lato-Bold', marginVertical: 2 }}>Rp 11.000.000</Text>
          </View>
        </LinearGradient>
        <View
          style={{ marginVertical: 15, borderBottomWidth: 0.8, borderBottomColor: '#E0E0E0', width: '100%', height: 1 }}
        />
        <View style={{ alignItems: 'center', width: '100%', justifyContent: 'center' }}>
          <Text style={{ color: 'black', fontSize: 18, fontFamily: 'Lato-Regular', marginVertical: 5 }}>TAGIHAN TERDEKAT</Text>
          <View style={{ width: '90%', marginTop: 10 }}>
            { this.renderListTagihan() }
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Button mode="contained" onPress={() => { console.log('Register'); }} style={{ backgroundColor: '#C4C4C4', marginTop: 15, justifyContent: 'center', alignSelf: 'flex-end' }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  fontFamily: 'Lato-Regular'
                }}>Lihat Tagihan</Text>
            </Button>
          </View>
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
          <Image source={APPLOGO} style={{ height: 35, width: 65 }} />
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>
        <Content contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
          <View style={{ height: swiperHeight }}>
            <Swiper height={swiperHeight} width={width} dotColor={'#56CCF2'} activeDotColor={'#2F80ED'}>
              {this.renderArusKas()}
              {this.renderIkhtisar()}
              {this.renderAnggaran()}
              {this.renderInvestasi()}
              {this.renderTagihan()}
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
    },
    boxStyle: {
      flex: 1,
      height: 80,
      elevation: 2,
      borderRadius: 8,
      paddingVertical: 15,
      marginHorizontal: 10,
      backgroundColor: 'white',
      shadowColor: '#00000021',
      shadowOffset: {
        width: 1, height: 1
      },
      shadowOpacity: 0.9,
      shadowRadius: 3,
      // Android
      elevation: 3,
    },
    boxStyleZero: {
      flex: 1,
      height: 75,
      elevation: 2,
      borderRadius: 8,
      paddingVertical: 15,
      marginHorizontal: 10,
      backgroundColor: 'white'
    },
    labelStyle: {
      fontSize: 12,
      fontFamily: 'Lato-Regular',
      marginTop: 5
    },
    imageStyle: {
      width: 40,
      height: 40
    },
    list: {
      marginHorizontal: 18,
      backgroundColor: 'red'
    },
});
