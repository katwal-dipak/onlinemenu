import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import useAppInitialization from '../../hooks/useAppInitialization';
import Download from '../../screens/Download';
import Home from '../../screens/Home';
import Menu from '../../screens/Menu';
import AddMenuItem from '../../screens/Menu/AddMenuItem';
import AddSection from '../../screens/Menu/AddSection';
import EditMenuItem from '../../screens/Menu/EditMenuItem';
import EditSection from '../../screens/Menu/EditSection';
import MenuItems from '../../screens/Menu/MenuItems';
import Pricing from '../../screens/Pricing';
import Profile from '../../screens/Profile';
import Settings from '../../screens/Settings';
import {Components} from '../../styles/colors';
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
          name="settings"
          component={Settings}
          options={{
            headerTitle: 'Settings',
            headerTitleStyle: styles.titleTextStyle,
            headerBackTitle: '',
            headerTintColor: Components.Button,
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
          options={{
            headerTitle: 'Menu',
            headerTitleStyle: styles.titleTextStyle,
            headerBackTitle: '',
            headerTintColor: Components.Button,
          }}
        />

        <Stack.Screen
          name="menu_items"
          component={MenuItems}
          options={{
            headerTitle: 'Menu Items',
            headerTitleStyle: styles.titleTextStyle,
            headerBackTitle: '',
            headerTintColor: Components.Button,
          }}
        />

        <Stack.Screen
          name="add_menu_item"
          component={AddMenuItem}
          options={{
            headerTitle: 'Add Menu Item',
            headerTitleStyle: styles.titleTextStyle,
            headerBackTitle: '',
            headerTintColor: Components.Button,
          }}
        />

        <Stack.Screen
          name="edit_menu_item"
          component={EditMenuItem}
          options={{
            headerTitle: 'Edit Menu Item',
            headerTitleStyle: styles.titleTextStyle,
            headerBackTitle: '',
            headerTintColor: Components.Button,
          }}
        />

        <Stack.Screen
          name="add_menu_section"
          component={AddSection}
          options={{
            headerTitle: 'Add Category',
            headerTitleStyle: styles.titleTextStyle,
            headerBackTitle: '',
            headerTintColor: Components.Button,
          }}
        />

        <Stack.Screen
          name="edit_menu_section"
          component={EditSection}
          options={{
            headerTitle: 'Edit Category',
            headerTitleStyle: styles.titleTextStyle,
            headerBackTitle: '',
            headerTintColor: Components.Button,
          }}
        />

        <Stack.Screen
          name="download"
          component={Download}
          options={{
            headerTitle: 'QR Code',
            headerTitleStyle: styles.titleTextStyle,
            headerBackTitle: '',
            headerTintColor: Components.Button,
          }}
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
