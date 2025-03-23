import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Andesmountain, Home, Start, Sayfa1, Sayfa2} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import icons from '../assets/icons';
import {RoutesNames} from '../config';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        animation: 'fade',
        tabBarStyle: {
          height: 80,
        },
      }}
      initialRouteName={RoutesNames.SAYFA1}>
      <Tab.Screen
        name={RoutesNames.SAYFA1}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.home}
              style={{
                height: 30,
                width: 30,
                tintColor: focused ? '#3294fc' : '#848282',
                marginTop: 35,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RoutesNames.SAYFA2}
        component={Sayfa1}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.clock}
              style={{
                height: 30,
                width: 30,
                tintColor: focused ? '#3294fc' : '#848282',
                marginTop: 35,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RoutesNames.SAYFA3}
        component={Sayfa1}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.heart}
              style={{
                height: 30,
                width: 30,
                tintColor: focused ? '#3294fc' : '#848282',
                marginTop: 35,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RoutesNames.Sayfa4}
        component={Sayfa2}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.profile}
              style={{
                height: 30,
                width: 30,
                tintColor: focused ? '#3294fc' : '#848282',
                marginTop: 35,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const StackRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={RoutesNames.START}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={RoutesNames.START} component={Start} />
      <Stack.Screen
        name={RoutesNames.ANDESMOUNTAIN}
        component={Andesmountain}
      />
      <Stack.Screen name={RoutesNames.TAB_SCREEN} component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
