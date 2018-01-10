"use strict";
import React, { Component } from "react";
import { View, ListView, ScrollView, TouchableOpacity, Text, Platform } from "react-native";

import Header from "../../components/header/Header";
import NavButton from "../../components/header/NavButton";
import Title from "../../components/header/Title";
import CustomWebView from "../../components/webview/CustomWebView";
import Style from "./Style";

export default class ReadMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check : false,
      uri: ''
    }
  }

  ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });
  
  moduleSource = this.ds.cloneWithRows([
    { id: 1, module: "Module", link: "link" },
    { id: 2, module: "node", link: "https://nodejs.org" },
    { id: 3, module: "gulp", link: "https://gulpjs.com" },
    { id: 4, module: "react", link: "https://reactjs.org" },
    {
      id: 5,
      module: "react-native",
      link: "https://facebook.github.io/react-native"
    },
    { id: 6, module: "yarn", link: "https://yarnpkg.com" },
    { id: 7, module: "webpack", link: "https://webpack.js.org" },
    { id: 8, module: "electron", link: "https://electronjs.org" }
  ]);
  packageSource = this.ds.cloneWithRows([
    { id: 1, prop: "name", value: "project name" },
    { id: 2, prop: "version", value: "project version" },
    { id: 3, prop: "description", value: "project description" },
    { id: 4, prop: "author", value: "author" },
    { id: 4, prop: "license", value: "license" }
  ]);

  renderModuleTable = (rowData) => {
    let firstColumnStyle = [Style.columnContainer, Style.firstColumn];
    let secondColumnStyle = [Style.columnContainer];
    let linkColumn = <Text />;
    if (rowData.id === 1) {
      firstColumnStyle.push(Style.tableHeader);
      secondColumnStyle.push(Style.tableHeader, Style.secondColumn);
      linkColumn = <Text style={[secondColumnStyle]}>{rowData.link}</Text>;
    } else {
      linkColumn = (
        <TouchableOpacity style={Style.secondColumn}
          onPress={()=> this.navigateToScreen("Home")}>
          <Text style={secondColumnStyle}>{rowData.link}</Text>
        </TouchableOpacity>
      );
    }
    return (
      <View style={Style.rowContainer}>
        <Text style={firstColumnStyle}>{rowData.module}</Text>
        {linkColumn}
      </View>
    );
  };

  renderPackageTable = rowData => {
    return (
      <View style={Style.rowContainer}>
        <Text style={[Style.columnContainer, Style.firstColumn]}>
          {rowData.prop}
        </Text>
        <Text style={[Style.columnContainer, Style.secondColumn]}>
          {rowData.value}
        </Text>
      </View>
    );
  };

  getReadMeView = () => {
    let leftComponent = <NavButton navigation={this.props.navigation} />;
    let centerComponent = <Title text="Read Me" />;
    return(
      <View style={Style.container}>
      <Header
        leftComponent={leftComponent}
        centerComponent={centerComponent}
        rightComponent={null}
      />
      <ScrollView style={Style.wrapper}>
        <Text style={Style.title}>
          REACT + REACT-NATIVE + WEBPACK + BABEL + GULP
        </Text>
        <Text style={Style.subTitle}>Prerequisite</Text>
        <View style={Style.listContainer}>
          <ListView
            dataSource={this.moduleSource}
            renderRow={rowData => this.renderModuleTable(rowData)}
          />
        </View>
        <Text style={Style.note}>
          Note: You may need to install all of these globally.
        </Text>
        <Text style={Style.subTitle}>Configration</Text>
        <Text>Update package.json</Text>
        <View style={Style.listContainer}>
          <ListView
            dataSource={this.packageSource}
            renderRow={rowData => this.renderPackageTable(rowData)}
          />
        </View>
        <Text style={Style.note}>
          Note: Do not change "scripts" unless your are sure what you are doing.
        </Text>
        <Text style={Style.subTitle}>Initialization</Text>
        <Text style={Style.command}>yarn run init</Text>
        <Text style={Style.note}>
          Note: This command will install all dependencies first. After then it
          will creat react-native project and ask for changes in .babelrc file.
          Be sure not to change .bablerc file in this step.
        </Text>
        <Text style={Style.subTitle}>Build Application</Text>
        <View style={Style.rowContainer}>
          <Text>Development:</Text>
          <Text style={Style.command}>yarn run build</Text>
        </View>
        <View style={Style.rowContainer}>
          <Text>Production:</Text>
          <Text style={Style.command}>yarn run build-prod</Text>
        </View>
        <Text style={Style.note}>
          Note: Build files will be generated in dist folder.
        </Text>
        <Text style={Style.subTitle}>Run Application</Text>
        <View style={Style.rowContainer}>
          <Text>Android:</Text>
          <Text style={Style.command}>yarn run android</Text>
        </View>
        <View style={Style.rowContainer}>
          <Text>IOS:</Text>
          <Text style={Style.command}>yarn run ios</Text>
        </View>
        <View style={Style.rowContainer}>
          <Text>WEB:</Text>
          <Text style={Style.command}>yarn run web</Text>
        </View>
        <View style={Style.rowContainer}>
          <Text>Desktop:</Text>
          <Text style={Style.command}>yarn run desktop</Text>
        </View>
        <Text style={Style.note}>
          Note: Before this commands you may need to build application first
        </Text>
        <Text style={Style.subTitle}>Generate Signed APK</Text>
        <Text>
          For android signed apk follow:
          https://facebook.github.io/react-native/docs/signed-apk-android.html
        </Text>
        <View style={Style.licenseWrapper}>
          <Text style={Style.licenseText}>License</Text>
          <Text style={Style.licenseType}>MIT</Text>
        </View>
      </ScrollView>
    </View>
    );
  }

  render() {
    if(this.state.check) {
      return <CustomWebView source={{uri:this.state.uri}}/>
    } else {
      return(this.getReadMeView());
    }
  }
}