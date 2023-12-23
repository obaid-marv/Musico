/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import App from './App.js';
import StartScreen from './screens/StartScreen.js';
import SignUp from './screens/SignUp.js';
import Login from './screens/LogIn.js';
import Settings from './screens/Settings.js';

AppRegistry.registerComponent(appName, () => Settings);
