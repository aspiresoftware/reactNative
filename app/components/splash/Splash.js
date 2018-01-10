import React, { Component } from 'react';
import { View, Platform, StyleSheet, Image } from 'react-native';

import Color from "./../../styles/color";
import Loader from "../loader/Loader";

export default class Splash extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={Style.container}>
                <Image
                    style={Style.logo}
                    source={require('./../../assets/images/aspire.png')}
                />
                <Loader/>
            </View>
        );
    }
    componentDidMount() { }
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Color.background_dark
    },
    logo: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: Color.text_light,
        borderRadius: 50,
        margin: 10
    }
});