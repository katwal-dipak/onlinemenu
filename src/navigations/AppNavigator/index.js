import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../../screens/Home';
import Details from '../../screens/Details';
import Login from '../../screens/Login';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="main_app"
          component={Home}
          options={{headerTitle: 'Online Menu'}}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerTitle: 'Login'}}
        />

        <Stack.Screen
          name="details"
          component={Details}
          options={{headerTitle: 'Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
