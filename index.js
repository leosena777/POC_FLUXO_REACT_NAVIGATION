import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry, View, Text} from 'react-native';
import {name as appName} from './app.json';
import Router from './src/router';

const App = () => <Router />;

AppRegistry.registerComponent(appName, () => App);
