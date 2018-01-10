import React, { Component } from 'react';
import { View, Platform, StyleSheet, ActivityIndicator } from 'react-native';

import Color from "./../../styles/color";

export default class Loader extends React.Component {
    render() {
        return (
            <View style={Style.container}>
                <ActivityIndicator size="large" color= {Color.loader_color}
                    animating={true}
                    style={Style.loader}
                />
            </View>
        );
    }
}

const Style = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.7,
        backgroundColor: Color.loader_container_color
    },
    loader: {
        padding: 20,
        backgroundColor: Color.loader_bg,
        borderRadius: 10,
        opacity: 1.0
    }
});