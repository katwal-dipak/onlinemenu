import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import useAppInitialization from '../../hooks/useAppInitialization';
import Details from '../../screens/Details';
import Home from '../../screens/Home';
import Login from '../../screens/Login';
import Pricing from '../../screens/Pricing';
import Settings from '../../screens/Settings';
import Profile from '../../screens/Profile';
import Menu from '../../screens/Menu';
import MenuItems from '../../screens/Menu/MenuItems';
import AddMenuItem from '../../screens/Menu/AddMenuItem';
import EditMenuItem from '../../screens/Menu/EditMenuItem';
import AddSection from '../../screens/Menu/AddSection';
import EditSection from '../../screens/Menu/EditSection';

import {TextStyles} from '../../styles/text';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const {} = useAppInitialization();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="main_app"
          component={Home}
          options={{
            headerTitle: 'Online Menu',
            headerTitleStyle: styles.titleTextStyle,
          }}
        />

        <Stack.Screen
          name="login"
          component={Login}
          options={{headerTitle: 'Login'}}
        />

        <Stack.Screen
          name="details"
          component={Details}
          options={{
            headerTitle: 'Details',
            headerBackTitle: '',
            headerTitleStyle: styles.titleTextStyle,
          }}
        />

        <Stack.Screen
          name="settings"
          component={Settings}
          options={{
            headerTitle: 'Settings',
            headerBackTitle: '',
            headerTitleStyle: styles.titleTextStyle,
          }}
        />

        <Stack.Screen
          name="pricing"
          component={Pricing}
          options={{headerTitle: 'Pricing'}}
        />

        <Stack.Screen
          name="profile"
          component={Profile}
          options={{headerTitle: 'Profile'}}
        />

        <Stack.Screen
          name="menu"
          component={Menu}
          options={{headerTitle: 'Menu'}}
        />

        <Stack.Screen
          name="menu_items"
          component={MenuItems}
          options={{headerTitle: 'Menu Items'}}
        />

        <Stack.Screen
          name="add_menu_item"
          component={AddMenuItem}
          options={{headerTitle: 'Add Menu Item'}}
        />

        <Stack.Screen
          name="edit_menu_item"
          component={EditMenuItem}
          options={{headerTitle: 'Edit Menu Item'}}
        />

        <Stack.Screen
          name="add_menu_section"
          component={AddSection}
          options={{headerTitle: 'Add Section'}}
        />

        <Stack.Screen
          name="edit_menu_section"
          component={EditSection}
          options={{headerTitle: 'Edit Section'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  titleTextStyle: {
    ...TextStyles.H1SemiBold,
    fontSize: 18,
  },
});
