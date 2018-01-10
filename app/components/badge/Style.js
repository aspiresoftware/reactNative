'use strict';
import { StyleSheet } from 'react-native';

import Color from "./../../styles/color";

const messagePadding = 10;
const containerMargin = 3;
export default StyleSheet.create({
    container: {
        padding: messagePadding,
        marginVertical: containerMargin,
        position: 'relative',
    },
    success: {
        backgroundColor: Color.badge_success_bg
    },
    error: {
        backgroundColor: Color.badge_error_bg
    },
    info: {
        backgroundColor: Color.badge_info_bg
    },
    successText: {
        color: Color.badge_success_text
    },
    errorText: {
        color: Color.badge_error_text
    },
    infoText: {
        color: Color.badge_info_text
    },
    iconContainer: {
        position: 'absolute',
        right: containerMargin,
        top: containerMargin
    },
    successCloseIcon: {
        color: Color.badge_success_text
    },
    errorCloseIcon: {
        color: Color.badge_error_text
    },
    infoCloseIcon: {
        color: Color.badge_info_text
    }
});