import React from 'react';
import { Text, StyleSheet, View, TouchableNativeFeedback } from 'react-native';

export default class CustomButton extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <TouchableNativeFeedback onPress={this.props.onPress}>
        <View style={[ styles.button, this.props.style ]}>
          <Text style={styles.text}>
            {this.props.text}
          </Text>
        </View>
      </TouchableNativeFeedback>
    );  
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    backgroundColor: '#34bc6d',
    minWidth: 110,
    borderRadius: 2,
    elevation: 4,
    margin: 10
  },
  text: {
    color: '#eee',
    textAlign: 'center'
  }
})