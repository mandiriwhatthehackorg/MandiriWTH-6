import React, { Component } from 'react';
import { View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';

export class CardStyled extends Component {
  goToNews = () => this.props.navigation.navigate('Article', { item: this.props.item });

  render() {
    const {
      card,
      cardImage,
      cardHeader,
      title,
      // description,
      timeContainer,
      iconData,
      time
    } = styles;

    const {
      item
    } = this.props;

    // const imageURI = `http://10.2.117.175/hcm/portal/web/${item.featured_image}`;
    const imageURI = `${item.featured_image}`;
    // const imageURI = 'http://www.athens.edu/wp-content/uploads/2016/02/hrm.jpg';
    console.log({ table: item});
    return (
      <TouchableOpacity onPress={this.goToNews} style={card}>
        <Image style={cardImage} source={{ uri: imageURI }} />
        <View style={cardHeader}>
          <View>
            <Text style={title}>{item.title}</Text>
            <View style={timeContainer}>
              <Image style={iconData} source={{ uri: 'https://png.icons8.com/color/96/3498db/calendar.png' }} />
              <Text style={time}>{item.publish_date}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: 'white',
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2, height: 0
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    // Android
    elevation: 3,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    backgroundColor: '#EEEEEE',

  },
  cardImage: {
    flex: 1,
    height: 100,
    width: null,
    borderRadius: 10
  },
  /******** card components **************/
  title: {
    fontSize: 14,
    flex: 1,
    fontFamily: 'Muli-Regular'
  },
  time: {
    fontSize: 10,
    color: '#808080',
    marginTop: 5,
    fontFamily: 'Muli-Regular'
  },
  icon: {
    width: 25,
    height: 25,
  },
  iconData: {
    width: 15,
    height: 15,
    marginTop: 5,
    marginRight: 5
  },
  timeContainer: {
    flexDirection: 'row'
  },
  currator: {
    fontSize: 10,
    color: '#808080'
  }
});
