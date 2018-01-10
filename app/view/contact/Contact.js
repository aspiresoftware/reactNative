'use strict';
import React, { Component } from 'react';
import { ScrollView, View, Text, Image, KeyboardAvoidingView } from 'react-native';

// Style
import Style from './Style';

// Header
import Header from "../../components/header/Header";
import NavButton from "../../components/header/NavButton";
import Title from "../../components/header/Title";

// Form
import ContactForm from "./ContactForm";

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    drawerLabel: 'Contact'
  };
  render() {
    let leftComponent = <NavButton navigation={this.props.navigation} />;
    let centerComponent = <Title text="Contact" />;
    return (
      <View behavior="padding" style={Style.container}>
        <Header
          leftComponent={leftComponent}
          centerComponent={centerComponent}
          rightComponent={null}
        />
        <ScrollView style={Style.container} contentContainerStyle={Style.contentContainerStyle}>
          <View style={Style.logoContainer}>
            <Image
              style={Style.logo}
              source={require('./../../assets/images/aspire.png')}
            />
            <Text style={Style.logoText}>Aspire Software Solution</Text>
          </View>
          <KeyboardAvoidingView behavior="padding" style={Style.formContainer}>
            <ContactForm />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}
