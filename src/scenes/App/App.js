/**
 * React Native for Web Starter App
 * https://github.com/grabcode/react-native-web-starter
 * Follow me https://twitter.com/grabthecode
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Alert,
  View,
  Platform
} from 'react-native';
import {
  AppRegistry
} from 'react-native';

import {Touchable} from '../../components/Touchable/Touchable.js';

export default class App extends Component {
  constructor() {
    super();
    this._handlePress = this._handlePress.bind(this);
  }
  
      state = {
          username: '',
      }

  _handlePress() {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      Alert.alert(
         'Welcome.......',
         this.state.username
      )
    } else {
      alert('Welcome.......'+this.state.username);
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.heading}>
        Enter some text in input field below and then click the button.
      </Text>
				<TextInput style={styles.input}
					placeholder='Username' 
					onChangeText={(username) => this.setState({username})}
					autoFocus={true}
				/>
        <Touchable
          onPress={this._handlePress}
          style={styles.touchable}>
          <Text style={styles.welcome}>
            Click me!
          </Text>
        </Touchable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  heading: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
    fontSize: 20,
  },
  input: {
    width: 200
  },
  touchable: {
    backgroundColor: '#CAE6FE'
  }
});
