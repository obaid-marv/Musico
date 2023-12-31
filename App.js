import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './Components/BottomTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './screens/StartScreen';
import Login from './screens/LogIn';
import SignUp from './screens/SignUp';
import LaunchScreen from './screens/LaunchScreen';
import RecommendationScreen from './screens/RecommendationScreen';
import EditScreen from './screens/EditScreen';
import Settings from './screens/Settings';
import MusicPlayer from './screens/MusicPlayer';
import MusicCard from './Components/MusicCard';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LaunchScreen" screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LaunchScreen" component={LaunchScreen} />  
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Main" component={BottomTabNavigator} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="MusicCard" component={MusicCard} />
        <Stack.Screen name="MusicPlayer" component={MusicPlayer} />
        
        <Stack.Screen name="Recommended" component={RecommendationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;