'use strict';

import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Platform, BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';

import NavButton from '../../components/header/NavButton';
import Title from '../../components/header/Title';
import Header from "../../components/header/Header";
import Color from "../../styles/color";

// Keep a reference to ensure there is only one event listener
// subscribed with BackAndroid

export default class About extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    drawerLabel: 'About'
  };
  goBack = () => {
    console.log(':::::-Back Event-:::::');
    console.log(this.props);
    // this.props.navigation.goBack();
    NavigationActions.back();
    console.log(':::::-Back Event-:::::');
    console.log(NavigationActions);
    console.log(':::::-Back Event-:::::');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    BackHandler.removeEventListener('hardwareBackPress', this.goBack.bind(this));
  }
  componentDidMount() {
    console.log('componentDidMount');
    // if (Platform.OS == "android" && listener == null) {
      BackHandler.addEventListener("hardwareBackPress", this.goBack.bind(this));
    // }
  }
  render () {
    let leftComponent = <NavButton navigation={this.props.navigation} />;
    let centerComponent = <Title text="About" />;
    return (
      <View style={styles.container}>
        <Header
          leftComponent={leftComponent}
          centerComponent={centerComponent}
          rightComponent={null}
        />
        <ScrollView contentContainerStyle={styles.contentWrapper} >
          <View><Text>About Page</Text></View>
        </ScrollView>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentWrapper: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white
  }
});
