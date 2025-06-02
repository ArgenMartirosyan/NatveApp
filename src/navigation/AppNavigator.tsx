import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoadingSpinner} from '../components/common';
import {AuthNavigator} from './AuthNavigator';
import {MainNavigator} from './MainNavigator';
import {RootStackParamList} from '../types';
// import {useAuth} from '../hooks/auth/useAuth';
import {navigationRef} from './NavigationService';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  // const {isAuthenticated, isLoading} = useAuth();
  const isAuthenticated = false;
  const isLoading = false;

  useEffect(() => {
    if (!isLoading && navigationRef.isReady()) {
      navigationRef.reset({
        index: 0,
        routes: [{name: isAuthenticated ? 'Main' : 'Auth'}],
      });
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading) {
    return <LoadingSpinner text="Checking authentication..." />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={isAuthenticated ? 'Main' : 'Auth'}>
        <Stack.Screen name="Main" component={MainNavigator} />
        <Stack.Screen name="Auth" component={AuthNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
