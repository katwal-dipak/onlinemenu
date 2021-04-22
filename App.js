import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import AppNavigator from './src/navigations/AppNavigator';

const App = () => {
  useEffect(() => {
    try {
      GoogleSignin.configure({
        webClientId:
          '965751423688-oo4fn8mnhanubh9jpjb0pg0i4evkaj0g.apps.googleusercontent.com',
      });
    } catch (error) {}
  }, []);

  return <AppNavigator />;
};

export default App;
