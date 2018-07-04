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
    isAgreed: false
  }

  render () {
    let isAgreed = this.state.isAgreed;


    return (
      <View style={containers.containerCenter}>
        <CustomTextInput placeholder="Name" />
        <CustomTextInput placeholder="Email" />
        <CustomTextInput placeholder="Password" />
        <View style={containers.containerRow}>
          <CheckBox value={isAgreed} onValueChange={() => this.setState({ isAgreed: !isAgreed })}/>
          <Text>I agreed with everything</Text>
        </View>
        <CustomButton text="Register!" onPress={()=>{}}/>
      </View>
    );
  }
}