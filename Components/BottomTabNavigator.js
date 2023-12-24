import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import LibraryScreen from '../screens/LibraryScreen';
import RecommendationScreen from '../screens/RecommendationScreen';
import Settings from '../screens/Settings';
import Login from '../screens/LogIn';
import StartScreen from '../screens/StartScreen';
import { KeyboardAvoidingView, Platform } from 'react-native';
import PopularScreen from '../screens/PopularScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown:false,
        tabBarActiveTintColor: '#ffa500',
        tabBarInactiveTintColor: '#ffffff',
        
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: '#001f3f',
          
          
        },

        keyboardHidesTabBar: true,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Music') {
            iconName = 'musical-notes';
          } else if (route.name === 'Library') {
            iconName = 'library';
          } else if (route.name === 'Popular') {
            iconName = 'flame';
          } else if (route.name === 'Account') {
            iconName = 'person';
          }

          return <Icon name={iconName} color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen name="Music" component={HomeScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Popular" component={PopularScreen} />
      <Tab.Screen name="Account" component={Settings} />
    </Tab.Navigator>
    </KeyboardAvoidingView>
  );
};

export default BottomTabNavigator;
