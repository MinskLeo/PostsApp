import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


// Providers
import DBProvider from '../../providers/DB_Provider';

// Styles
import containerStyles from '../../styles/containers';

export default class App extends React.Component {
  constructor (props) {
    super(props);

    this.getUserInfo();
  }

  async getUserInfo() {
    let userInfo = await DBProvider.getUserInfo('1');

    this.setState({
      name: userInfo.name,
      _id: userInfo._id,
      avatar: userInfo.avatar,
      email: userInfo.email
    });
  }

  render() {
    return (
      <View style={containerStyles.containerColumnStart}>
        <Image source={{
          uri: this.state.avatar
        }} style={{width: 250, height: 250}}/>
        <Text>{this.state._id}</Text>
        <Text>{this.state.name}</Text>
        <Text>{this.state.email}</Text>
      </View>
    );
  }
}