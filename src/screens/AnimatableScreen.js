import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Container, Content, Header} from 'native-base';

export class AnimatableScreen extends Component {
  handleViewRef = ref => this.view = ref;

  bounce = () => this.view.bounce(800).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));

  render() {
    return (
      <Container>
        <Header />
        <Content style={{ flex: 1 }}>
          <View style={{ backgroundColor: 'green', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableWithoutFeedback onPress={this.bounce}>
              <Animatable.View ref={this.handleViewRef}>
                <Text>Bounce me!</Text>
              </Animatable.View>
            </TouchableWithoutFeedback>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    shadowOffset: {
      width: 1, height: 0
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // Android
    elevation: 3,
    height: 50,
    width: 50
  }
});
