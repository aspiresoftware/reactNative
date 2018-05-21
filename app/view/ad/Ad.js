'use strict';

import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Picker, TouchableOpacity, Platform } from 'react-native';
import { NavigationActions } from 'react-navigation';

import AdMobService from '../../common/admob.service';
import Loader from '../../components/loader/Loader';
import Radio from '../../components/radiobutton';

import NavButton from '../../components/header/NavButton';
import Title from '../../components/header/Title';
import Header from "../../components/header/Header";
import Color from "../../styles/color";

// Keep a reference to ensure there is only one event listener
// subscribed with BackAndroid

export default class Ad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            banner: 'SMART_BANNER',
            isLoading: false
        }
    }
    static navigationOptions = {
        drawerLabel: 'Ad'
    };
    componentWillUnmount() {
        // AdMobService.initialize('ca-app-pub-3940256099942544/6300978111');
        console.log('componentWillUnmount');
    }
    componentDidMount() {
        let AdRequest = AdMobService.statics.AdRequest;
        this.rewardedVideoEventTypes = AdMobService.types.RewardedVideoEventTypes;
        this.eventTypes = AdMobService.types.EventTypes;
        this.request = new AdRequest();
        this.request.addKeyword('foo').addKeyword('bar');
    }
    onAdFailedToLoad = (error) => {
        this.setState({ isLoading: false });
        alert(error);
    }
    onVideoLoaded = () => {
        this.showVideo();
    }
    onInterstitialLoaded = () => {
        this.showInterstitial();
    }
    onRewarded = (event) => {
        this.setState({ isLoading: false });
        alert('The user watched the entire video and will now be rewarded!', event);
    }
    showVideo = () => {
        if (this.video.isLoaded()) {
            this.video.show();
        } else {
            alert('Video not loaded');
        }
    }
    videoStarted = () => {
        this.setState({ isLoading: false });
        alert('Video Started');
    }
    onAdClosed = () => {
        this.setState({ isLoading: false });
    }
    watchInterstitial = () => {
        this.setState({ isLoading: true });
        this.interstitial = AdMobService.interstitial('ca-app-pub-3940256099942544/1033173712');
        // Load the advert with our AdRequest
        this.interstitial.loadAd(this.request.build());
        this.interstitial.on(this.eventTypes.onAdClosed, this.onAdClosed);
        this.interstitial.on(this.eventTypes.onAdFailedToLoad, this.onAdFailedToLoad);
        this.interstitial.on(this.eventTypes.onAdLoaded, this.onInterstitialLoaded);
    }

    watchVideo = () => {
        this.setState({ isLoading: true });
        this.video = AdMobService.rewarded('ca-app-pub-3940256099942544/5224354917');
        // Load the advert with our AdRequest
        this.video.loadAd(this.request.build());
        this.video.on(this.eventTypes.onAdClosed, this.onAdClosed);
        this.video.on(this.eventTypes.onAdFailedToLoad, this.onAdFailedToLoad);
        this.video.on(this.eventTypes.onAdLoaded, this.onVideoLoaded);
        this.video.on(this.rewardedVideoEventTypes.onRewardedVideoStarted, this.videoStarted);
        this.video.on(this.rewardedVideoEventTypes.onRewarded, this.onRewarded);
    }
    showInterstitial = () => {
        if (this.interstitial.isLoaded()) {
            this.interstitial.show();
        } else {
            alert('Interstitial not loaded');
        }
    }
    openDebugMenu = () => {
        AdMobService.openDebugMenu();
    }
    render() {
        let leftComponent = <NavButton navigation={this.props.navigation} />;
        let centerComponent = <Title text="Ad" />;
        let Banner = AdMobService.statics.Banner;
        let NativeExpress = AdMobService.statics.NativeExpress;
        let bannerList = [
            ["BANNER", "BANNER"],
            ["FULL_BANNER", "FULL BANNER"],
            ["LARGE_BANNER", "LARGE BANNER"],
            ["MEDIUM_RECTANGLE", "MEDIUM RECTANGLE"],
            ["MEDIUM_RECTANGLE", "MEDIUM RECTANGLE"],
            ["SMART_BANNER", "SMART BANNER"]
        ];
        let bannerButtonList = [];
        bannerButtonList = bannerList.map(banner => (
            <Radio selected={this.state.banner = banner[0]} label={banner[1]}/>
        ));

        return (
            <View style={styles.container}>
                <Header
                    leftComponent={leftComponent}
                    centerComponent={centerComponent}
                    rightComponent={null}
                />
                <ScrollView contentContainerStyle={styles.contentWrapper} >
                    <Text>Banner:</Text>
                    <Radio selected={true} />
                    {bannerButtonList}
                    <Picker
                        selectedValue={this.state.banner}
                        onValueChange={(itemValue, itemIndex) => this.setState({ banner: itemValue })}>
                        <Picker.Item label="BANNER" value="BANNER" />
                        <Picker.Item label="FULL BANNER" value="FULL_BANNER" />
                        <Picker.Item label="LARGE BANNER" value="LARGE_BANNER" />
                        <Picker.Item label="MEDIUM RECTANGLE" value="MEDIUM_RECTANGLE" />
                        <Picker.Item label="SMART BANNER" value="SMART_BANNER" />
                    </Picker>
                    <View>
                        <Banner
                            unitId={"ca-app-pub-3940256099942544/6300978111"}
                            size={this.state.banner}
                            onAdFailedToLoad={this.onAdFailedToLoad}
                        />
                    </View>
                    <Text>NativeExpress:</Text>
                    <View>
                        <NativeExpress
                            unitId={"ca-app-pub-3940256099942544/6300978111"}
                            size={"320x200"}
                            onAdLoaded={() => {
                                console.log('Advert loaded');
                            }}
                        />
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.touchable}
                            onPress={this.watchVideo.bind(this)}>
                            <Text>Video</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.touchable}
                            onPress={this.watchInterstitial.bind(this)}>
                            <Text>Interstitial</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                            style={styles.touchable}
                            onPress={this.openDebugMenu.bind(this)}>
                            <Text>Debug Menu</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                {this.state.isLoading ? <Loader /> : null}
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentWrapper: {
        flexGrow: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: Color.white
    },
    touchable: {
        backgroundColor: '#2980b6',
        borderRadius: 4,
        marginVertical: 10,
        padding: 10
    }
});
