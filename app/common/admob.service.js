'use strict';
import firebase from "react-native-firebase";

import deviceInfo from "./device-info.service";

let admob = {
    initialize: initialize,
    openDebugMenu: openDebugMenu,
    interstitial: interstitial,
    rewarded: rewarded,
    statics: {
        Banner: firebase.admob.Banner, // Returns a Banner component. https://rnfirebase.io/docs/v3.2.x/admob/reference/Banner
        NativeExpress: firebase.admob.NativeExpress, // Returns a NativeExpress component.
        AdRequest: firebase.admob.AdRequest, // Returns a AdRequest class. https://rnfirebase.io/docs/v3.2.x/admob/reference/AdRequest
        VideoOptions: firebase.admob.VideoOptions // Returns a VideoOptions class.
    },
    types: {
        EventTypes: firebase.admob.EventTypes, // Returns an Object containing Admob event types.
        RewardedVideoEventTypes: firebase.admob.RewardedVideoEventTypes, // Returns an Object containing RewardedVideo event types.
        NativeExpressEventTypes: firebase.admob.NativeExpressEventTypes // Returns an Object containing NativeExpress event types.
    },
    size: { //  Important Note: Requesting an advert with a size which does not exist on the AdMob servers will return admob/error-code-internal-error.
        BANNER: 'BANNER',
        FULL_BANNER: 'FULL_BANNER',
        LARGE_BANNER: 'LARGE_BANNER',
        LEADERBOARD: 'LEADERBOARD',
        MEDIUM_RECTANGLE: 'MEDIUM_RECTANGLE',
        SMART_BANNER: 'SMART_BANNER'
    } // To specify a custom size, pass a string with the width and height split by an "x" (follows the Regex pattern ([0-9]+)x([0-9]+)), e.g 320x150
};

/**
 * Before using any AdMob feature, ensure you call the initialize method.
 * This only needs to be done once per the apps lifecycle.
 * Initialize takes your AdMob App ID, where you can find on your AdMob dashboard.
 * For testing purposes, you can use the Admob test app ID "ca-app-pub-3940256099942544~3347511713"
 * 
 * id: string
 */
function initialize(id) {
    firebase.admob().initialize(id);
};

/**
 * Opens a debug menu, allowing you to test your ads.
 * This menu cannot be closed unless you reload your app.
 */
function openDebugMenu() {
    firebase.admob().openDebugMenu();
}

/**
 * Returns a new Interstitial to be loaded with a given unitId.
 * unitId: string(Ad unitId)
 */
function interstitial(unitId) {
    return firebase.admob().interstitial(unitId);
}

/**
 * Returns a new RewardedVideo to be loaded with a given unitId.
 * unitId: string(Ad unitId)
 */
function rewarded(unitId) {
    return firebase.admob().rewarded(unitId);
}

export default admob;