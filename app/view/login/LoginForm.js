import React from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  TouchableHighlight,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import styles from './Style';
import Color from '../../styles/color';
import Badge from '../../components/badge/Badge';

const Touchable = (props) => (
  <TouchableHighlight
    style={[styles.touchableWrapper, props.styles]}
    {...props}>
    <View>
      {props.children}
    </View>
  </TouchableHighlight>
);

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('this.props.state', this.props.value);
    return (
      <View style={styles.formContainer}>
        <View style={styles.formHead}>
          <Text style={styles.formHeadText}>Login</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Email'
            autoCapitalize={'none'}
            underlineColorAndroid={Color.transparent}
            onChangeText={this.props.setEmail.bind(this)}
            onFocus={this.props.resetEmail.bind(this)}
            onBlur={this.props.validateEmail.bind(this)}
            keyboardType={'email-address'}
            onSubmitEditing={() => { this.passwordInput.focus(); }}
          />
          {
            this.props.value.emailError ?
              <Badge type={'error'} message={this.props.value.emailError} /> : null
          }
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            ref={input => { this.passwordInput = input; }}
            secureTextEntry
            returnKeyType='go'
            style={styles.input}
            placeholder='Password'
            autoCapitalize={'none'}
            underlineColorAndroid={Color.transparent}
            onChangeText={this.props.setPassword.bind(this)}
            onFocus={this.props.resetPassword.bind(this)}
            onBlur={this.props.validatePassword.bind(this)}
          />
          {
            this.props.value.passwordError ?
              <Badge type={'error'} message={this.props.value.passwordError} /> :
              null
          }
        </View>

        <Touchable
          style={styles.touchable}
          onPress={this.props.submit.bind(this)}>
          <Text style={styles.submit}>Submit</Text>
        </Touchable>
      </View>
    )
  }
}