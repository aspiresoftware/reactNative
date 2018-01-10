"use strict";
import React, { Component } from "react";
import { Platform } from "react-native";
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Header } from 'react-native-elements';

import NavButton from './NavButton';
import Style from './Style';

export default class CustomHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Header
        leftComponent={ this.props.leftComponent }
        centerComponent={ this.props.centerComponent }
        rightComponent={ this.props.rightComponent }
        statusBarProps={ Style.outerContainerStyles }
        outerContainerStyles={ Style.outerContainerStyles }
        innerContainerStyles={ Style.innerContainerStyles }
      />
    );
  }
}
CustomHeader.propTypes = {
  leftComponent: PropTypes.object,
  centerComponent: PropTypes.object,
  rightComponent: PropTypes.object
};
