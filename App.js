import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './Components/BottomTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './screens/StartScreen';
import Login from './screens/LogIn';
import SignUp from './screens/SignUp';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen" screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="Main" component={BottomTabNavigator} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;