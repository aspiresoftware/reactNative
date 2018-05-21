'use strict';

import React, { Component } from 'react';
import { Platform } from 'react-native';
import { DrawerNavigator, StackNavigator } from "react-navigation";

// View
import About from "../../view/about/About";
import Contact from "../../view/contact/Contact";
import Home from "../../view/home/Home";
import ReadMe from "../../view/readme/ReadMe";
import WebView from "../../view/webview/Webview";
import Notification from "../../view/notification/Notification";
import Login from "../../view/login/Login";
import Ad from "../../view/ad/Ad";
import Splash from "../../components/splash";

// Side Nav
import Sidenav from "../sidenav";

// Local Storage
import { LocalStorageService } from '../../common/local-storage.service';

// Analytics
import analytic from '../../common/analytic.service';
import messaging from '../../common/cloud-messaging.service';

const DrawerStack = DrawerNavigator(
  {
    Home: { screen: Home },
    Notification: { screen: Notification },
    Contact: { screen: Contact },
    About: { screen: About },
    ReadMe: { screen: ReadMe },
    Ad: { screen: Ad }
  },
  {
    contentComponent: Sidenav,
    drawerWidth: 300,
    initialRouteName: "Home"
  }
);

const DrawerNavigation = StackNavigator(
  {
    DrawerStack: { screen: DrawerStack }
  },
  {
    headerMode: "none"
  }
);

const WebViewStack = StackNavigator(
  {
    WebView: { screen: WebView }
  },
  {
    headerMode: "screen"
  }
);

const LoginStack = StackNavigator(
  {
    Login: { screen: Login }
  },
  {
    headerMode: "none"
  }
);

export default class Route extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialRouteName: 'Splash'
    }
  }

  trackView = (prevState, newState, action) => {
    let PrimNavPreState = prevState.index;
    let PrimNavNewState = newState.index;
    if (action.routeName === "DrawerOpen" ||
      action.routeName === "DrawerClose" ||
      action.routeName === "DrawerToggle") {
      return;
    }
    if (action.routeName === "drawerStack") {
      analytic.setCurrentScreen("Home");
    } else if( action.routeName === "webViewStack") {
      analytic.setCurrentScreen("WebView");
    } else {
      analytic.setCurrentScreen(action.routeName);
    }
  }

  render() {
    const PrimaryNav = StackNavigator(
      {
        loginStack: { screen: LoginStack },
        drawerStack: { screen: DrawerNavigation },
        webViewStack: { screen: WebViewStack },
        Splash: { screen: Splash }
      },
      {
        // Default config for all screens
        headerMode: "none",
        title: "Main",
        initialRouteName: this.state.initialRouteName
      }
    );
    return <PrimaryNav onNavigationStateChange={this.trackView} />;
  }

  componentWillMount() {
    this.localStorage = new LocalStorageService();
    this.localStorage.getValue('accessToken').then((response) => {
      if (response) {
        analytic.setCurrentScreen("Home");
        this.setState({ initialRouteName: 'drawerStack' });
      } else {
        analytic.setCurrentScreen("Login");
        analytic.logEvent('login_screen', {});
        this.setState({ initialRouteName: 'loginStack' });
      }
    });
    messaging.getInitialNotification().then((notification) => {
      console.log('getInitialNotification: ', notification);
    });
    messaging.getToken().then((token) => {
      console.log('getToken: ',token);
    }).catch((error) => {
      console.log('Get Token Error: ', error);
    });
    messaging.onMessage((notification) => {
      console.log('onMessage: ', notification);
    });
  }
  componentDidMount() { }
}
