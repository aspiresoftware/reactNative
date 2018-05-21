'use strict';
import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity } from "react-native";

import Style from './Style';

const RadioButton = props => {
    console.log(props);
    return (
        <View style={[Style.container, props.style]}>
            {
                props.selected ?
                    <View style={Style.isSelected} />
                    : null
            }
            <View><Text style={Style.text}>{props.label}</Text></View>
        </View>
    );
};

export default RadioButton;
