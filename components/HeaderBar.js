import React,{Component} from 'react';
import PropTypes from 'prop-types';

import {
  Header,
  Left,
  Body,
  Title,
  Right
} from 'native-base';

export default class HeaderBar extends Component {
	constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
  	return (
	    <Header>
        <Left/>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right />
      </Header>
  	);
  }
}

Header.propTypes = {
  title: PropTypes.string
};