import React from 'react';
import { Platform, Keyboard, View, AppRegistry, ScrollView } from 'react-native';
import { LoginService } from './LoginService';
import { LocalStorageService } from "../../common/local-storage.service";
import LoginForm from './LoginForm';
import validator from '../../common/validator';
import validatejs from 'validate.js';
import Loader from '../../components/loader/Loader';
import SocialForm from './SocialForm';

import Style from './Style';

// Social Sign in Imports
import firebase from "react-native-firebase";
import { GoogleSignin, GoogleSigninButton } from "react-native-google-signin";
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';

// Anaylytic, and device info
import analytic from '../../common/analytic.service';
import deviceInfo from '../../common/device-info.service';


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.registerClientId = this.registerClientId.bind(this);
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
      isLoading: false
    }
  }

  componentDidMount() {
    this.localStorageService = new LocalStorageService;
    this.loginService = new LoginService;
    this.setupGoogleSignin();
  }


  validate = (fieldName, value) => {
    var formValues = {}
    formValues[fieldName] = value;
    // console.log(formValues);
    var formFields = {};
    formFields[fieldName] = validator[fieldName];
    // console.log('formFields', formFields);
    const result = validatejs(formValues, formFields);
    if (result) {
      // console.log('validate result', result)
      return result[fieldName][0];
    }
    return null;
  }

  registerClientId() {
    this.localStorageService.clearLocalStorage();
    this.localStorageService.create();
    const emailErr = this.validate('email', this.state.email);
    const passwordErr = this.validate('password', this.state.password);
    console.log('emailError', emailErr);
    console.log('passwordError', passwordErr)

    this.setState({
      emailError: emailErr,
      passwordError: passwordErr
    });

    if (!emailErr && !passwordErr) {
      Keyboard.dismiss();
      this.setState({ isLoading: true });
      // var DeviceInfo = require('react-native-device-info');
      // var params = {
      //     clientId: DeviceInfo.getUniqueID()
      // };
      // this.localStorageService.setValue('uuid',params.clientId);
      // var loginService = new LoginService;
      // loginService.registerClientId(params, this.registerClientIdSuccess, this.registerClientIdError);


      // only for time being //

      var uuid = this.generateUUID();
      uuid = uuid.concat(this.state.email);
      this.localStorageService.setValue('uuid', uuid).then(() => {
        var params = {
          clientId: uuid
        };
        this.loginService.registerClientId(params, this.registerClientIdSuccess, this.registerClientIdError);
      });
    }
  }

  registerClientIdSuccess = (result) => {
    // console.log('registerClientIdSuccess', result);
    var loginModel = {
      email: this.state.email,
      password: this.state.password,
      grantType: 'password'
    };
    this.busy = this.loginService.authenticateUser(loginModel, this.loginSuccess, this.loginError);
  }

  registerClientIdError = (error) => {
    this.setState({ isLoading: false });
    console.log('registerClientIdError', error);
  }

  loginSuccess = (result) => {
    // console.log('loginSuccess', result);
    if (result.errorCode) {
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'Error', detail: this.configuration.ERROR.WRONG_CREDENTIALS });
    } else {
      const auth = result;
      this.saveToken(auth.access_token, auth.refresh_token).then(() => {
        const model = {
          email: this.state.email
        };
        this.busy = this.loginService.loginUser(model, this.loginUserSuccess, this.loginUserError);
      });
      // this.localStorageService.setValue('accessToken', auth.access_token)
      //   .then(() => {
      //     this.localStorageService.setValue('refreshToken', auth.refresh_token)
      //       .then(() => {
              
      //       });
      //   });
    }
  }

  loginError = (error) => {
    this.setState({ isLoading: false });
    console.log('loginError', error);
  }

  loginUserSuccess = (result) => {
    this.setState({ isLoading: false });
    // console.log('loginUserSuccess', result);
    if (result.lenght > 0 && result[0].errorCode) {
      if (result[0].errorCode === 401) {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error', detail: this.configuration.ERROR.WRONG_CREDENTIALS });
      } else {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error', detail: this.configuration.ERROR.SYSTEM_ERROR });
      }
    } else {
      result = result.result;
      if (result.roles[0] === 'ROLE_SUPER' || result.roles[1] === 'ROLE_SUPER') {
        let data = {
          userId: result.id,
          name: result.firstName + ' ' + result.lastName,
          email: result.email,
          provider: 'local',
          userImage: result.image,
          isAccessTokenExpired: 0
        };
        this.saveUserLocalData(data);
        // this.localStorageService.setValue('userId', result.id)
        //   .then(() => {
        //     this.localStorageService.setValue('isAccessTokenExpired', 0)
        //       .then(() => {
        //         this.localStorageService.setValue('userEmail', result.email)
        //           .then(() => {
        //             // this.localStorageService.setValue('userImage', result.image).then(() => {
        //             // });
        //           });
        //       });
        //   });
        // this.utilityService.navigateToState(this.configuration.STATES.dashboard);
      }
    }
  }

  loginUserError = (error) => {
    this.setState({ isLoading: false });
    console.log('loginUserError', error);
  }

  generateUUID = () => {
    let d = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = ((d + Math.random() * 16) % 16) | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

  clearEmail = () => {
    //   this._username.setNativeProps({ text: '' });
  }

  clearPassword = () => {
    //   this._password.setNativeProps({ text: '' });
  }

  saveUserLocalData = async (data) => {
    let userData = await this.localStorageService.mergeValue('user', data);
    analytic.setUserId(data.userId);
    analytic.logEvent('user_login', data);
    this.props.navigation.navigate('drawerStack');
  }
  saveToken = async (accessToken, refreshToken) => {
    let data = {};
    if (accessToken) {
      data['accessToken'] = accessToken;
    }
    if (refreshToken) {
      data['refreshToken'] = refreshToken;
    }
    return await this.localStorageService.mergeValue('auth', data);
  }

  async setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        // scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
        // iosClientId: <FROM DEVELOPER CONSOLE>, // only for iOS
        // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        // hostedDomain: '' // specifies a hosted domain restriction
        // forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login
        // accountName: ''
        webClientId:
          "71268946504-fq7d51im1i491vprd4g3cg0eppq73hb1.apps.googleusercontent.com" // client ID of type WEB for your server (needed to verify user ID and offline access)
      });
    } catch (err) {
      console.log("Google signin error", err.code, err.message);
    }
  }

  googleLogin = () => {
    console.log('-----Google Login-----');
    this.setState({ isLoading: true });
    const user = GoogleSignin.currentUser();
    // Add configuration settings here:
    GoogleSignin.signIn()
      .then(data => {
        // Set Token to Local data
        this.saveToken(data.accessToken, data.idToken);
        // create a new firebase credential with the token
        const credential = firebase.auth.GoogleAuthProvider.credential(
          data.idToken,
          data.accessToken
        );
        // login with credential
        return firebase.auth().signInWithCredential(credential);
      })
      .then(currentUser => {
        console.log(currentUser.photoURL);
        let data = {
          userId: currentUser.providerData[0].uid.toString(),
          name: currentUser.displayName,
          email: currentUser.email,
          provider: currentUser.providerData[0].providerId,
          userImage: currentUser.photoURL
        };
        this.saveUserLocalData(data);
        // console.log(JSON.stringify(currentUser.toJSON()));
      })
      .catch(error => {
        this.setState({ isLoading: false });
        alert('Unable to login! Please try again.');
        console.error(`Login fail with error: ${error}`);
      });
  };
  facebookLogin = () => {
    console.log('-----Facebook Login-----');
    this.setState({ isLoading: true });
    return LoginManager
      .logInWithReadPermissions(['public_profile', 'email'])
      .then((result) => {
        if (!result.isCancelled) {
          console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`)
          // get the access token
          return AccessToken.getCurrentAccessToken()
        }
      })
      .then(data => {
        if (data) {
          // create a new firebase credential with the token
          const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken)
          // login with credential
          return firebase.auth().signInWithCredential(credential)
        }
      })
      .then((currentUser) => {
        if (currentUser) {
          let data = {
            userId: currentUser.providerData[0].uid.toString(),
            name: currentUser.displayName,
            email: currentUser.email,
            provider: currentUser.providerData[0].providerId,
            userImage: currentUser.photoURL
          };
          this.saveUserLocalData(data);
          // console.info(JSON.stringify(currentUser.toJSON()))
        }
      })
      .catch((error) => {
        this.setState({ isLoading: false });
        alert('Unable to login! Please try again.');
        console.log(`Login fail with error: ${error}`);
      });
  }

  render() {
    return (
      <View style={Style.container}>
        <ScrollView contentContainerStyle={Style.loginContainer}>
          <View style={Style.loginWrapper}>
            <LoginForm
              setPassword={(password) => this.setState({ password: password })}
              setEmail={(email) => { this.setState({ email: email }) }}
              resetEmail={this.clearEmail}
              resetPassword={this.clearPassword}
              submit={this.registerClientId}
              validateEmail={(email) => { this.setState({ emailError: this.validate('email', this.state.email) }) }}
              validatePassword={(password) => { this.setState({ passwordError: this.validate('password', this.state.password) }) }}
              value={this.state}
            />
            <SocialForm
              facebookLogin={this.facebookLogin}
              googleLogin={this.googleLogin}
            />
          </View>
        </ScrollView>
        {this.state.isLoading ? <Loader /> : null}
      </View>
    );
  }
}
