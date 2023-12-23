/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import App from './App.js';
import StartScreen from './screens/StartScreen.js';
import SignUp from './screens/SignUp.js';
import HomeScreen from './screens/HomeScreen.js';
import Login from './screens/LogIn.js';
import Settings from './screens/Settings.js';
import LibraryScreen from './screens/LibraryScreen.js';

AppRegistry.registerComponent(appName, () => StartScreen);
