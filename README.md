# reactNative
Project for all platform (Web, Android, iOS and Desktop(Mac., Linux, and Windows))

A way to share application logic between a React Web app, React Desktop app and a React Native app with a single set of code.The app itself is a very simple with a button and input field, but the real logic is, how to use the same code to build an application for web, android, ios and desktop at the same time.

->react-native-web with webpack is used for building web specific app
->electron with webpack is used for building desktop specific app

Directory structure:

android houses the Android project files, ios houses the ios project files, desktop houses the main.js and index.html also minified bundle.js  needed for the electron, and web houses the webpack configs and index.html minified bundle.js.

Entry point:

The entry point for the ios and android app is index.js, and for the web and desktop app is index.web.js.

Environment setup:

1> install node
2> install yarn (optional - for me yarn worked well, you can go with npm also)
3> install electron globally
4> install react native cli globally
5> install react native globally
6> install android studio or simply android sdk tools and set path valiables (for running app on android)
7> xcode required for running app on ios

clode or download zip

Go to the root folder of the project, and run command yarn install or npm install. After installing whole lot of things you can run your application.

Running the application

scripts are defined in package.json file for each specific file
just run in terminal

yarn run run-ios -> to run on ios
yarn run run-android -> to run on android
yarn run run-web -> to run on web
yarn run run-desktop -> to run on desktop
yarn run pack-linux -> to get ditributable package for linux
yarn run pack-windows -> to get ditributable package for windows
yarn run pack-mac -> to get ditributable package for mac
