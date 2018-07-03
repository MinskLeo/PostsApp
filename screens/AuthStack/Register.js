import React from "react";
import { View, Text, CheckBox } from 'react-native';

// Styles
import containers from '../../styles/containers';

// Components
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';

export default class LoginScreen extends React.Component{
  state = {
    name: '',
    email: '',
    password: '',
    isAgreed: true
  }

  render () {
    return (
      <View style={containers.containerCenter}>
        <CustomTextInput placeholder="Name" />
        <CustomTextInput placeholder="Email" />
        <CustomTextInput placeholder="Password" />
        <View style={containers.containerRow}>
          <CheckBox onChange={value=>alert(value)} value={true}></CheckBox>
          <Text>I agreed with everything</Text>
        </View>
        <CustomButton text="Register!" onPress={()=>{}}/>
      </View>
    );
  }
}