# reactNative
Project for Mobile platform (Android, iOS)

A way to share application logic between a React Web app, React Desktop app and a React Native app with a single set of code.The app itself is a very simple with a button and input field, but the real logic is, how to use the same code to build an application for web, android, ios and desktop at the same time.

## Directory structure:

android houses the Android project files, ios houses the ios project files, desktop houses the main.js and index.html also minified bundle.js  needed for the electron, and web houses the webpack configs and index.html minified bundle.js.

## Entry point:

The entry point for the ios and android app is index.js, and for the web and desktop app is index.web.js.

## Environment setup and Running the application:

- install node -- v8.9.3
- install npm -- v5.5.1 or yarn -- v1.3.2
- install electron globally -- v1.7.10
- install react native cli globally -- v2.0.1
- install react native globally -- v0.51.0
- install android studio or simply android sdk tools and set path valiables (for running app on android)
- xcode required for running app on ios

### clone or download zip

```
git clone https://github.com/aspiresoftware/reactNative.git projectname
cd projectname
yarn or npm install
```

After installing whole lot of things you can run your application.

update local.properties inside your android folder with your sdk path (if needed)

scripts are defined in package.json file for each specific file
just run in terminal

### For android
`yarn run run-android` or `react-native run-android`

- [generating build release for android](https://facebook.github.io/react-native/docs/signed-apk-android.html)

### For ios
`yarn run run-ios`

- [generating build release for ios](https://facebook.github.io/react-native/docs/running-on-device.html)

## Screen shots

### Android
![alt android image not found](https://raw.githubusercontent.com/aspiresoftware/reactNative/master/readmeIMG/android.png)

### IOS
![alt ios image not found](https://raw.githubusercontent.com/aspiresoftware/reactNative/master/readmeIMG/ios.png)

## Generate splash screen and icon for android

- get splash screen and icons from [here](https://apetools.webprofusion.com/app/#/tools/imagegorilla)
- First copy and paste the following directories from the Android directory from Image Gorilla to the android/app/src/main/res directory.
```
drawable-hdpi
drawable-mdpi
drawable-xhdpi
drawable-xxhdpi
```

- Open the project in Android Studio and in the android/app/src/main/res create a drawable directory, then create a new “Drawable resource file”. Name that file background_splash and edit as given below.
![alt image not found](https://raw.githubusercontent.com/aspiresoftware/reactNative/master/readmeIMG/1.png)
- Edit android/app/res/values/styles.xml as given below
![alt image not found](https://raw.githubusercontent.com/aspiresoftware/reactNative/master/readmeIMG/2.png)
- Edit AndroidManifest.xml as given below
![alt image not found](https://raw.githubusercontent.com/aspiresoftware/reactNative/master/readmeIMG/3.png)
- Create new java file and edit as given below
![alt image not found](https://raw.githubusercontent.com/aspiresoftware/reactNative/master/readmeIMG/4.png)

Now run your application with your desired icon and splash screen.

## Generate splash screen and icon for ios

- Generate ios splash screen and icon images.
- Navigate to the ios folder in your project, then open the .xcodeproj file within it using Xcode.
- Then scroll down to “Launch Images Source” and click “Use Asset Catalog…” and press “Migrate” when prompted, and edit App Icon and Launch Images as given below.
![alt image not found](https://raw.githubusercontent.com/aspiresoftware/reactNative/master/readmeIMG/5.png)
- Delete LaunchScreen.xib file under your app folder in xcode
- Within the “Images.xcassets” folder there is now a “LaunchImage” option inside of it. This is where we’ll drag and drop the iOS splash screen images
- Within the “Images.xcassets” folder there is now a “AppIcon” option inside of it. This is where we’ll drag and drop the iOS icon images

Now run your application with your desired icon and splash screen.

## For more information and help visit

- [React Native](https://facebook.github.io/react-native/)
- [React Native Web](https://github.com/necolas/react-native-web)
- [React Native Troubleshooting](https://facebook.github.io/react-native/docs/troubleshooting.html)
