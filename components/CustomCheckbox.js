import React from 'react';
import { Checkbox } from 'react-native';

export default class CustomCheckbox extends React.Component {
  constructor (props) {
    super(props);
  }


  render () {
    return (
      <Checkbox onValueChange={this.props.onValueChange}></Checkbox>
    );
  }
}