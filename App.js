import React from 'react';
import { View } from 'react-native';

// Router
import Router from './router';

// Styles
import containerStyles from './styles/containers';

export default class App extends React.Component {
  render() {
    return (
      <View style = {[ containerStyles.fullscreen, containerStyles.container ]}>
        <Router />
      </View>
    );
  }
}