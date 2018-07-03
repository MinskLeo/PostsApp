import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default class CustomTextInput extends React.Component {
  constructor (props) {
    super(props);


  }

  render () {
    return (
      <TextInput style={[styles.txtinput, this.props.style]} onChangeText={this.props.onChangeText} placeholder={this.props.placeholder} secureTextEntry={this.props.password}/>
    );
    
  }
}

const styles = StyleSheet.create({
  txtinput:{
    minWidth: 150,
    padding: 10,
    margin: 10,
    fontSize: 18
  }
});