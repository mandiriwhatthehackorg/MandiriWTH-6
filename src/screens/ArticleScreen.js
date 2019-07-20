import React, { Component } from 'react';
import HTMLView from 'react-native-htmlview';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Platform,
  StatusBar
} from 'react-native';
import { Container, Content } from 'native-base';
import { HeaderStyled } from '../components/common/';

export class ArticleScreen extends Component {
  render() {
    const {
      imageStyle,
      timeContainer,
      iconData,
      time,
      titleStyle,
      contentContainer,
      transparentHeader,
      contentView
    } = styles;

    const item = this.props.navigation.getParam('item');
    // const imageURI = `http://10.2.117.175/hcm/portal/web/${item.featured_image}`;
    const imageURI = 'http://www.athens.edu/wp-content/uploads/2016/02/hrm.jpg';

    return (
      <Container>
        <HeaderStyled
          headerStyle={transparentHeader}
          navigation={this.props.navigation}
        />
        <Content>
          <Image style={imageStyle} source={{ uri: imageURI }} />
          <View style={contentContainer}>
            <Text style={titleStyle}>{item.title}</Text>
            <View style={timeContainer}>
              <Image style={iconData} source={{ uri: 'https://png.icons8.com/color/96/3498db/calendar.png' }} />
              <Text style={time}>{item.publish_date}</Text>
            </View>
            <HTMLView
              style={contentView}
              value={item.content}
              stylesheet={styles}
            />
          </View>
        </Content>
        {/*<TouchableOpacity style={floatingButtonStyle}>
          <Icon style={iconStyle} name="arrow-back" style={{ color: 'red' }} />
        </TouchableOpacity>*/}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  /* transparent header */
  transparentHeader: {
    backgroundColor: 'white',
    borderBottomWidth: 0,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
  /* Button Size */
  floatingButtonStyle: {
    backgroundColor: '#F5FCFF',
    borderRadius: 25,
    position: 'absolute',
    width: 40,
    height: 40,
    top: 30,
    left: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 2, height: 0
    },
    shadowOpacity: 0.3,
    // anrdroid
    elevation: 4
  },
  iconStyle: {
    alignSelf: 'center'
  },
  /* Header Styling */
  imageStyle: {
    flex: 1,
    height: 300
  },
  /* Paragraph Styling */
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'flex-start',
    // backgroundColor: '#F4FFFA',
    backgroundColor: '#f9fafc'
  },
  titleStyle: {
    fontSize: 25,
    fontFamily: 'Muli-Bold',
    // fontWeight: '500'
  },
  paragraphStyle: {
    marginTop: 15,
    fontSize: 15,
    color: 'black'
  },
  /* Date Styling */
  iconData: {
    width: 15,
    height: 15,
    marginTop: 5,
    marginRight: 5
  },
  timeContainer: {
    flexDirection: 'row'
  },
  time: {
    fontSize: 13,
    color: '#808080',
    marginTop: 5
  },
  /* Content View */
  contentView: {
    marginTop: 10
  },
  /* HTML View */
  p: {
    fontFamily: 'Muli-Regular'
  }
});
