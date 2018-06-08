/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { 
  Container, 
  Content, 
  Form,
  Button,
  Text,
} from 'native-base';
import {ToastAndroid} from 'react-native'
import HeaderBar from './components/HeaderBar.js';
import FormInput from './components/FormInput.js';
import Captcha from './components/Captcha.js';
import ImagePickerFromGallery from './components/ImagePicker.js';

export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      captchaValidation: false
    };
  }

  // call back function for text change of input
  onTextChange = (field, value)=>{
    this.setState({[field]: value}, ()=>{
      console.log(this.state)
    })
  }

  submitData = () =>{
    const {name,email,phoneNumber,captchaValidation} = this.state;
    console.log(name,email,phoneNumber)
    if (name.length > 0 && email.length > 0 && phoneNumber.length > 0 && captchaValidation == true){
      ToastAndroid.show('Data Saved successfully', ToastAndroid.SHORT);
    }
  }

  //call back for captch validation
  onCaptchaValidate = (value) =>{
    this.setState({captchaValidation: value})
  }

  render() {
    return (
      <Container>
        <HeaderBar title={"Sample Form"}/>
        <Content>
          <Form>
            <ImagePickerFromGallery/>
            <FormInput label='Name' onTextChange={this.onTextChange} name='name'/>
            <FormInput label='Email' keyboardType='email-address' onTextChange={this.onTextChange} name='email'/>
            <FormInput label='Phone' keyboardType='numeric' onTextChange={this.onTextChange} name='phoneNumber'/>
            <Captcha validate={this.onCaptchaValidate}/>
            <Button 
              style={{alignSelf: 'center', marginTop:10}}
              onPress={() => this.submitData()}
            >
              <Text>Submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
