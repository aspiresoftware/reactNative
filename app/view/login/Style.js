import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#2c3e50'
  },
  loginContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginWrapper: {
    maxWidth: 312
  },
  formContainer: {
    // marginLeft: 30,
    // marginRight: 30
  },
  formHead: {
    alignItems: 'center',
    marginBottom: 20
  },
  formHeadText: {
    color: 'white',
    fontSize: 25
  },
  inputContainer: {
    marginBottom: 20
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 5
  },
  errorLabel: {
    color: 'red',
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7,
    backgroundColor: 'grey'
  },
  touchableWrapper: {
    backgroundColor: 'lightcoral',
    padding: 20,
    borderRadius: 3
  },
  submit: {
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  touchable: {
    backgroundColor: '#2980b6',
    borderRadius: 4
  }
});