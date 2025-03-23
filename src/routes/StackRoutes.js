import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Start,Login,ForgotPassword} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Start">
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      
    </Stack.Navigator>
  );
};

export default StackRoutes;