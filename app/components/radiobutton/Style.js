'use strict';
import { StyleSheet } from 'react-native';

import Color from "./../../styles/color";
export default StyleSheet.create({
    container: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: Color.background_medium,
        alignItems: 'center',
        justifyContent: 'center'
    },
    isSelected: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: Color.background_medium
    },
    text: {
        color: Color.background_medium
    }
});