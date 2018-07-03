import React from "react";
import { View, Text, TextInput, Image } from 'react-native';

// Styles
import containers from '../../styles/containers';

// Components
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';

// Images
const LoginAvatar = require('../../assets/images/loginscreen_avatar_logo.png');

export default class LoginScreen extends React.Component{
  state = {
    login: '',
    password: ''
  }

  constructor (props) {
    super(props);

    this.OnRegisterClick=this.OnRegisterClick.bind(this);
    this.OnLoginClick=this.OnLoginClick.bind(this);
  }
  OnRegisterClick () {
    this.props.navigation.navigate('Register');
  }
  OnLoginClick () {
    // alert('Log In')
  }
  OnLoginChange (text) {

  }
  OnRegisterChange (text) {

  }

  render () {
    return (
      <View style={[containers.fullscreen, containers.containerCenter]}>
      <Image source={LoginAvatar} style={{width: 100, height: 100}}/>
        <CustomTextInput placeholder="Login" onChangeText={text=>this.setState({login: text})}/>
        <CustomTextInput placeholder="Password" onChangeText={text=>this.setState({password: text})} password={true}/>
        <View style={containers.containerRow}>
          <CustomButton onPress={this.OnRegisterClick} text="Register"/>
          <CustomButton onPress={this.OnLoginClick} text="Log In"/>
        </View>
      </View>
    );
  }
}