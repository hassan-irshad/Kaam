import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import RouteNames from './RouteNames';
import SignupScreen from './screens/signupScreen';
import SigninScreen from './screens/signinScreen';

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName={RouteNames.SigninScreen}
      screenOptions={{gestureEnabled: true, headerShown: false}}>
      <Stack.Screen name={RouteNames.SigninScreen} component={SigninScreen} />
      <Stack.Screen name={RouteNames.SignupScreen} component={SignupScreen} />
    </Stack.Navigator>
  );
}
