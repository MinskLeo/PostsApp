import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

// Provider
import DBProvider from '../../providers/DB_Provider';
import DeviceStorageProvider from '../../providers/DeviceStorage_Provider';

// Styles
import containers from '../../styles/containers';

export default class App extends React.Component {
  
  constructor (props) {
    super(props);

    this.bootstrapAsync();
  }

  async bootstrapAsync () {
    let user = await DeviceStorageProvider.getUser();

    DBProvider.checkUser(user)
    .then( result => {
      this.props.navigation.navigate('App');
    })
    .catch( error => {
      this.props.navigation.navigate('Auth');
    })
  }



  render() {
    return (
      <View style={[containers.fullscreen, containers.containerCenter]}>
        <ActivityIndicator/>
        <Text>Loading123...</Text>
      </View>
    );
  }
}