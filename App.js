import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import AppNavigator from './src/navigations/AppNavigator';
import userReducer from './src/store/reducers/user';
import profileReducer from './src/store/reducers/profile';
import menuReducer from './src/store/reducers/menu';

const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  menu: menuReducer,
});

let store = createStore(rootReducer);

const App = () => {
  useEffect(() => {
    try {
      GoogleSignin.configure({
        webClientId:
          '965751423688-oo4fn8mnhanubh9jpjb0pg0i4evkaj0g.apps.googleusercontent.com',
      });
    } catch (error) {}
  }, []);

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
