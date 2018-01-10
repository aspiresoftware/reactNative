import React, { Component } from 'react';
import { View, Platform, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from "react-native-vector-icons/MaterialIcons";

import Style from './Style';

export default class Badge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true
        }
    }

    _hideBadge = () => {
        this.setState({ isVisible: false });
    }
    render() {
        let containerStyle = (this.props.type === 'success') ? Style.success :
            (this.props.type === 'error') ? Style.error : Style.info;
        let textStyle = (this.props.type === 'success') ? Style.successText :
            (this.props.type === 'error') ? Style.errorText : Style.infoText;
        let iconStyle = (this.props.type === 'success') ? Style.successCloseIcon :
            (this.props.type === 'error') ? Style.errorCloseIcon : Style.infoCloseIcon;
        
        if(!this.state.isVisible) {
            return null;
        }
        return (
            <View style={[containerStyle, Style.container]}>
                {/* <TouchableOpacity style={Style.iconContainer} onPress={() => {this._hideBadge()}}>
                    <Icon name="close" style={iconStyle} />
                </TouchableOpacity> */}
                <Text style={textStyle}>{this.props.message}</Text>
            </View>
        );
    }
    componentDidMount() { }
}

Badge.defaultProps = {
    type: 'info',
    message: null
}

Badge.propTypes = {
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}