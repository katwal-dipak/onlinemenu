import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import useAppInitialization from '../../hooks/useAppInitialization';
import Details from '../../screens/Details';
import Home from '../../screens/Home';
import Login from '../../screens/Login';
import Pricing from '../../screens/Pricing';
import Settings from '../../screens/Settings';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const {} = useAppInitialization();

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

        <Stack.Screen
          name="settings"
          component={Settings}
          options={{headerTitle: 'Settings'}}
        />

        <Stack.Screen
          name="pricing"
          component={Pricing}
          options={{headerTitle: 'Pricing'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
