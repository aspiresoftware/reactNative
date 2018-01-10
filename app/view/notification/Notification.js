"use strict";
import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Foundation";

import Header from "../../components/header/Header";
import NavButton from "../../components/header/NavButton";
import Title from "../../components/header/Title";
import Color from './../../styles/color';
import { LocalStorageService } from "../../common/local-storage.service";
import messaging from '../../common/cloud-messaging.service';

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.localstorage = new LocalStorageService();
    this.state = { badgeCount: 0 };
  }
  static navigationOptions = {
    drawerLabel: 'Notification'
  };
  componentDidMount() {
    this.localstorage.getValue('badgeCount').then((badgeCount) => {
      this.setState({ badgeCount: (badgeCount || 0) });
    }).catch((error) => {
      console.log(error);
    });
    messaging.onMessage((notification) => {
      this.setState({ badgeCount: (++this.state.badgeCount || 0) });
    });
  }
  render() {
    let leftComponent = <NavButton navigation={this.props.navigation} />;
    let centerComponent = <Title text="Notification" />;
    return (
      <View style={styles.container}>
        <Header
          leftComponent={leftComponent}
          centerComponent={centerComponent}
          rightComponent={null}
        />
        <ScrollView contentContainerStyle={styles.contentWrapper} >
          <View><Text>You have total {this.state.badgeCount} unread notifications.</Text></View>
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
