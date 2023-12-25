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
import LaunchScreen from './screens/LaunchScreen.js';
import LibraryScreen from './screens/LibraryScreen.js';
import RecommendationScreen from './screens/RecommendationScreen.js';
import MusicCard from './Components/MusicCard.js';
import MusicPlayer from './screens/MusicPlayer.js';
import PopularScreen from './screens/PopularScreen.js';
import TestScreen from './screens/TestScreen.js';
import TrackPlayer from 'react-native-track-player';


AppRegistry.registerComponent(appName, () => App);

if (!TrackPlayer) {
    TrackPlayer.setupPlayer({});
    TrackPlayer.registerPlaybackService(() => require('./services.js'));
  }

