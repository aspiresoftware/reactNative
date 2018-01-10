"use strict";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { View, WebView } from "react-native";

import Title from '../header/Title';
import Header from '../header/Header';

export default class CustomWebView extends Component {
  constructor(props) {
    super(props);
    this.state = { uri: props.source };
    console.log('Prop URI: ', props.source);
  }

  render() {
    console.log('URI: ', this.state.uri);
    let style = { flex: 1 };
    if (this.props.style) {
      style = { ...this.props.style };
    }
    let centerComponent =<Title text={'google'}/>;
    return (
      <View style = {{ flex: 1 }}>
        <WebView
          style={style}
          source={this.state.uri}
          scrollEnabled={this.props.scrollEnabled}
          dataDetectorTypes={this.props.dataDetectorTypes}
          contentInset={this.props.contentInset}
          bounces={this.props.bounces}
          allowsInlineMediaPlayback={this.props.allowsInlineMediaPlayback}
          userAgent={this.props.userAgent}
          thirdPartyCookiesEnabled={this.props.thirdPartyCookiesEnabled}
          mixedContentMode={this.props.mixedContentMode}
          javaScriptEnabled={this.props.javaScriptEnabled}
          domStorageEnabled={this.props.domStorageEnabled}
          decelerationRate={this.props.decelerationRate}
          startInLoadingState={this.props.startInLoadingState}
          onShouldStartLoadWithRequest={this.props.onShouldStartLoadWithRequest}
          scalesPageToFit={this.props.scalesPageToFit}
          renderLoading={this.props.renderLoading}
          renderError={this.props.renderError}
          onNavigationStateChange={this.props.onNavigationStateChange}
          onMessage={this.props.onMessage}
          onLoadStart={this.props.onLoadStart}
          onLoadEnd={this.props.onLoadEnd}
          onLoad={this.props.onLoad}
          onError={this.props.onError}
          nativeConfig={this.props.nativeConfig}
          mediaPlaybackRequiresUserAction={this.props.mediaPlaybackRequiresUserAction}
          injectedJavaScript={this.props.injectedJavaScript}
          injectJavaScript={this.props.injectJavaScript}
          automaticallyAdjustContentInsets={this.props.automaticallyAdjustContentInsets}
        />
      </View>
    );
  }
}
