"use strict";

import React, { Component } from "react";
import { Platform } from "react-native";

import CustomWebView from '../../components/webview/CustomWebView';

export default class webView extends Component {
  constructor(props) {
    super(props);
    console.log('state: ',this.state);
    console.log('props: ',this.props);
  }
  render() {
    return <CustomWebView source={{uri:'www.google.com'}}/>
  }
}
