import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import Color from "./../../styles/color";
import Style from "./Style";

export default class ContactForm extends React.Component {
  render() {
    return (
      <View style={Style.formWrapper}>
        <TextInput
          placeholder="Email"
          placeholderTextColor={Color.text_medium}
          returnKeyType="next"
          autoCapitalize={'none'}
          autoFocus={true}
          keyboardType={'email-address'}
          onSubmitEditing={() => {
            this.queryInput.focus();
          }}
          style={Style.input}
          underlineColorAndroid={"transparent"}
        />
        <TextInput
          placeholder="Query"
          placeholderTextColor={Color.text_medium}
          style={Style.teaxtArea}
          ref={input => {
            this.queryInput = input;
          }}
          returnKeyType="go"
          multiline={true}
          numberOfLines={5}
          underlineColorAndroid={"transparent"}
        />
        <TouchableOpacity style={Style.buttonContainer}>
          <Text style={Style.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
