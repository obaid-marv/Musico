import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './Components/BottomTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './screens/StartScreen';
import Login from './screens/LogIn';
import SignUp from './screens/SignUp';
<<<<<<< HEAD
import LaunchScreen from './screens/LaunchScreen';
=======
>>>>>>> 75797b5d40391d80dcf3cecdbd174bd2e7a69e9a
import RecommendationScreen from './screens/RecommendationScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LaunchScreen" screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LaunchScreen" component={LaunchScreen} />  
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="RecommendationScreen" component={RecommendationScreen}/>
        <Stack.Screen name="Main" component={BottomTabNavigator} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Recommended" component={RecommendationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;