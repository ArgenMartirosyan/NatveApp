import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChatScreen, ProfileScreen} from '../screens';
import {MainStackParamList} from '../types';

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
