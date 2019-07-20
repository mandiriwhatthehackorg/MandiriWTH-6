import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import Swiper from 'react-native-swiper'

const styles = {
  slide1: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
}

export class SwiperScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
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
  render () {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 200 }}>
          <Swiper height={200} width={'100%'} showsButtons>
            {this.state.items.map((item, key) => {
              return (
                <View key={key} style={item.css}>
                  <Text style={styles.text}>{item.title}</Text>
                </View>
              )
            })}
          </Swiper>
        </View>
      </View>
    )
  }
}
