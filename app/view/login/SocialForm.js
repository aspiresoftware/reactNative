import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Platform
} from "react-native";
import Icon from "react-native-vector-icons/Foundation";
import Color from './../../styles/color';

export default class SocialForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.socialContainer}>
                <View>
                    <Text>--- Login with social account---</Text>
                </View>
                <TouchableOpacity
                    style={[styles.socialButton, styles.facebookButton]}
                    activeOpacity={0.4}
                    onPress={this.props.facebookLogin.bind(this)}>
                    <View style={styles.iconWrapper} >
                        <Icon name="social-facebook" style={styles.socialIcon} />
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.socialText}>Sign in with Facebook</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.socialButton, styles.googleButton]}
                    activeOpacity={0.4}
                    onPress={this.props.googleLogin.bind(this)}>
                    <View style={styles.iconWrapper}>
                        <Icon name="social-google-plus" style={styles.socialIcon} />
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.socialText}>Sign in with Google+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    socialContainer: {
        padding: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    socialButton: {
        width: 312,
        marginTop: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        shadowColor: Color.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 8
    },
    facebookButton: {
        backgroundColor: "#3B5998",
        borderRadius: 2
    },
    googleButton: {
        backgroundColor: "#DD4B39",
        borderRadius: 2
    },
    iconWrapper: {
        padding: 2,
        justifyContent: "space-around",
        alignItems: "center",
    },
    textWrapper: {
        flexGrow: 1,
        justifyContent: "space-around",
        alignItems: "center"
    },
    socialIcon: {
        marginVertical: -7.5,
        justifyContent: "space-around",
        alignItems: "flex-start",
        color: Color.white,
        fontSize: 52
    },
    socialText: {
        color: Color.white
    }
});