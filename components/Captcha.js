import React,{Component} from 'react';
import PropTypes from 'prop-types';

import {
  List, 
  ListItem, 
  Left, 
  Body, 
  Right,
  Text
} from 'native-base';
import FormInput from './FormInput.js';

export default class Captcha extends Component {
	constructor(props) {
    super(props);
    this.state = {
      first_number: '',
      second_number: '',
      sum: ''
    };
  }

  onTextChange = (field, value)=>{
    this.setState({[field]: value}, ()=>{
      console.log(this.state)
      this.sum()
    })
  }

  sum = () =>{
    this.setState({sum: parseInt(this.state.first_number) + parseInt(this.state.second_number)}, ()=>{
      if(this.state.sum != 'NaN'){
        this.props.validate(true)
      }else
      this.props.validate(false)
    })
  }

  render() {
  	return (
      <List>
        <ListItem>
          <Left>
            <FormInput 
              label='Enter No' 
              keyboardType='numeric'
              onTextChange={this.onTextChange} 
              name='first_number'
            />
          </Left>
          <Body>
            <FormInput 
              label='Enter No' 
              keyboardType='numeric'
              onTextChange={this.onTextChange} 
              name='second_number'
            />
          </Body>
          <Right>
            <Text>{this.state.sum}</Text>
          </Right>
        </ListItem>
      </List>
  	);
  }
}