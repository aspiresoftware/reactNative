"use strict";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavigationActions } from "react-navigation";
import { Platform } from "react-native";
import firebase from "react-native-firebase";

import { LocalStorageService } from "../../common/local-storage.service";
import analytic from "../../common/analytic.service";
import messaging from "../../common/cloud-messaging.service";
import Native from "./SidenavRenderer";
import dummyImage from "./DummyImage";

export default class Sidenav extends Component {
  constructor(props) {
    super(props);
    this.localStorage = new LocalStorageService();
    this.state = {
      image: dummyImage,
      notificationCount: 0
    }
  }

  componentDidMount() {
    messaging.onMessage((notification) => {
      messaging.getBadgeNumber().then((badgeNumber) => {
        console.log('messaging.getBadgeNumber: ', badgeNumber);
      });
      this.setState({ notificationCount: ++this.state.notificationCount });
      console.log('From Sidenav: ', notification);
    });
    this.localStorage.getUserData().then((user) => {
      this.setState({
        provider: user.provider,
        image: user.userImage,
        userName: user.name,
        userEmail: user.email
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  navigateToScreen = route => () => {
    analytic.setCurrentScreen(route + '_screen');
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  logOut = () => {
    this.localStorage.getValue('provider').then((provider) => {
      if (provider === 'google.com' || provider === 'facebook.com') {
        console.log(firebase.auth().signOut());
      }
      this.localStorage.clearLocalStorage()
      .then((response) => {
        const navigateAction = NavigationActions.navigate({
          routeName: 'Login'
        });
        this.props.navigation.dispatch(navigateAction);
      });
    });
  }

  render() {
    return Native.call(this, this.props, this.state);
  }
}

Sidenav.propTypes = {
  navigation: PropTypes.object
};
