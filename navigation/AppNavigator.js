import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainTabNavigator from './MainTabNavigator';
import EditScreen from '../screens/EditScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

const AuthStack = createStackNavigator({ SignIn: LoginScreen });
const AppStack = createStackNavigator({ 
 
  AuthLoading: AuthLoadingScreen, 
  
});

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  
    AuthLoading: AuthLoadingScreen,
    Signup:SignupScreen,
    Edit: EditScreen ,
    App: AppStack,
    Main:MainTabNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  })
  
);
