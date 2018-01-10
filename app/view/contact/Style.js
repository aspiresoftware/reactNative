"use strict";
import Color from "./../../styles/color";
import { Platform, StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white
  },
  contentContainerStyle: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  logo: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: Color.text_light,
    borderRadius: 50,
    margin: 10
  },
  logoText: {
    color: Color.text_light,
    width: 100,
    textAlign: "center",
    opacity: 0.9
  },
  formContainer: {
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  formWrapper: {
    padding: 20,
    width: "100%"
  },
  input: {
    height: 40,
    marginBottom: 20,
    color: Color.input_text,
    paddingHorizontal: 10,
    backgroundColor: Color.input_bg
  },
  teaxtArea: {
    maxHeight: 100,
    marginBottom: 20,
    color: Color.input_text,
    backgroundColor: Color.input_bg,
    paddingHorizontal: 10,
    borderWidth: 0
  },
  buttonContainer: {
    backgroundColor: Color.background_dark,
    paddingVertical: 10
  },
  buttonText: {
    textAlign: "center",
    color: Color.text_light,
    fontWeight: "700"
  }
});
