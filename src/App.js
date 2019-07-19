import React, { Component } from 'react';
import { AppContainer } from './routes';

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <AppContainer />
    );
  }
}
