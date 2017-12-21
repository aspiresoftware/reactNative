# reactNative
Project for all platform (Web, Android, iOS and Desktop(Mac., Linux, and Windows))

A way to share application logic between a React Web app, React Desktop app and a React Native app with a single set of code.The app itself is a very simple with a button and input field, but the real logic is, how to use the same code to build an application for web, android, ios and desktop at the same time.

-react-native-web with webpack is used for building web specific app
-electron with webpack is used for building desktop specific app
-electron packeger for generating distributable desktop file

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
`yarn run run-android`

### For ios
`yarn run run-ios`

### For web
- `yarn run run-web` your app is accessible at `http://localhost:3000`
- `yarn run prod-web` --> for production build

### For desktop
`yarn run run-desktop` (Linux, windows, and mac os)

### Building distributable package for desktop
- `yarn run pack-linux` -> to get ditributable package for linux
- `yarn run pack-windows` -> to get ditributable package for windows
- `yarn run pack-mac` -> to get ditributable package for mac

## Screen shots

### Android
![alt android image not found](https://raw.githubusercontent.com/aspiresoftware/reactNative/master/readmeIMG/android.png)

### IOS
![alt ios image not found](https://raw.githubusercontent.com/aspiresoftware/reactNative/master/readmeIMG/ios.png)

### Web
![alt web image not found](https://raw.githubusercontent.com/aspiresoftware/reactNative/master/readmeIMG/web.png)

### Desktop
![alt desktop image not found](https://raw.githubusercontent.com/aspiresoftware/reactNative/master/readmeIMG/desktop.png)


## For more information and help visit

- [React Native](https://facebook.github.io/react-native/)
- [React Native Web](https://github.com/necolas/react-native-web)
- [React Native Troubleshooting](https://facebook.github.io/react-native/docs/troubleshooting.html)
- [Electron](https://electronjs.org/)
- [Electron Packeger](https://www.npmjs.com/package/electron-packager)
