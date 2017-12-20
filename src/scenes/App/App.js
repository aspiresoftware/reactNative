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
  Button,
  View,
  Image
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
          message: ''
      }

  _handlePress() {
    this.setState({ message: this.state.username });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/react-native-web.png')}
          style={styles.logo}
        />
				<TextInput
					placeholder='Username' 
					onChangeText={(username) => this.setState({username})}
					autoFocus={true}
				/>
        {!!this.state.message && (
          <Text>
          {this.state.message}
          </Text>
        )}
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
  logo: {
    alignSelf: 'center',
    marginBottom: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  touchable: {
    backgroundColor: '#CAE6FE'
  }
});
