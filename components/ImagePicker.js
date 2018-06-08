import React,{Component} from 'react';
import PropTypes from 'prop-types';

import {
  Thumbnail,
  Text
} from 'native-base';
import {View} from 'react-native';

import ImagePicker from 'react-native-image-picker';

var options = {
  title: 'Select Avatar',
  mediaType: 'photo',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

export default class ImagePickerFromGallery extends Component {
	constructor(props) {
    super(props);
    this.state = {
      default_uri: 'https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png'
    };
  }

  openImagePicker = () =>{
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        this.setState({
          default_uri: response.uri
        });
      }
    });
  }

  render() {
  	return (
      <View>
        <Thumbnail large source={{uri: this.state.default_uri}}/>
        <Text onPress={() => this.openImagePicker()}>Edit Avatar</Text>
      </View>
  	);
  }
}