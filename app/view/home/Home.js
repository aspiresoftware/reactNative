"use strict";
import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Platform } from "react-native";

import Header from "../../components/header/Header";
import NavButton from "../../components/header/NavButton";
import Title from "../../components/header/Title";
import Icon from "react-native-vector-icons/Foundation";
import Color from './../../styles/color';
import { LocalStorageService } from "../../common/local-storage.service";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.localstorage = new LocalStorageService();
    this.state = {provider: null};
  }
  static navigationOptions = {
    drawerLabel: 'Home'
  };
  componentDidMount() {
    this.localstorage.getValue('provider').then((provider) => {
      this.setState({provider: provider});
    }).catch((error) => {
      console.log(error);
    });
  }
  render() {
    let leftComponent = <NavButton navigation={this.props.navigation} />;
    let centerComponent = <Title text="My Home" />;
    return (
      <View style={styles.container}>
        <Header
          leftComponent={leftComponent}
          centerComponent={centerComponent}
          rightComponent={null}
        />
        <ScrollView contentContainerStyle={styles.contentWrapper} >
          <View><Text>Home Page</Text></View>
          {this.state.provider === 'local' ? <Text>You have used local sign in method.</Text> : null}
          {this.state.provider === 'facebook.com' ? <Text>You have used facebook sign in method.</Text> : null}
          {this.state.provider === 'google.com' ? <Text>You have used google sign in method.</Text> : null}
        </ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
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
