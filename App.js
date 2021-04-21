import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import AppNavigator from './src/navigations/AppNavigator';

const App = () => {
  useEffect(() => {
    try {
      GoogleSignin.configure();
    } catch (error) {}
  }, []);

  return <AppNavigator />;
};

export default App;
