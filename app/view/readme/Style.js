"use strict";
import { Platform, StyleSheet } from "react-native";

import Color from "./../../styles/color";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white
    },
    wrapper: {
        paddingHorizontal: 10
    },
    title: {
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: Color.title_bg,
        color: Color.title_color
    },
    subTitle: {
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: Color.subtitile_bg,
        color: Color.subtitle_color
    },
    listContainer: {
        justifyContent: "center",
        paddingBottom: 10
    },
    tableHeader: {
        fontWeight: 'bold',
        backgroundColor: Color.background_light,
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    columnContainer: {
        textAlignVertical: "center",
        padding: 6,
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 5,
    },
    firstColumn: {
        width: '30%'
    },
    secondColumn: {
        width: '70%'
    },
    licenseWrapper: {
        marginTop: 10,
        marginBottom: 20,
        padding: 10,
        backgroundColor: Color.title_bg
    },
    licenseText: {
        fontSize: 20,
        marginBottom: 8,
        color: Color.title_color
    },
    licenseType: {
        fontWeight: '700',
        color: Color.title_color
    },
    note: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: Color.background_error,
        color: Color.text_error
    },
    command: {
        marginHorizontal: 10,
        marginBottom: 10,
        color: Color.text_success,
        fontWeight: '700'
    }
});
