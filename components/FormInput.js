import React,{Component} from 'react';
import PropTypes from 'prop-types';

import {
  Item, 
  Input,
  Label
} from 'native-base';

export default class FormInput extends Component {
	constructor(props) {
    super(props);
    this.state = {
      presence: null,
      value: ''
    };
  }

  // Validation for empty value
  validate = (value) =>{
    if(value.length > 0){
      this.setState({presence: true, value: value})
    }else{
      this.setState({presence: false})
    }
    this.props.onTextChange(this.props.name, value);
  }

  render() {
  	return (
	    <Item floatingLabel success={this.state.presence} error={(this.state.presence == null)? false : !this.state.presence}>
        <Label>{this.props.label}</Label>
        <Input 
          keyboardType={this.props.keyboardType}
          onChangeText={(text) => this.validate(text)}
        />
      </Item>
  	);
  }
}

FormInput.propTypes = {
  lable: PropTypes.string,
  keyboardType: PropTypes.string,
  name: PropTypes.string,
  onTextChange: PropTypes.func
};