import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';

import {setFirebaseAuthUserObj, clearUserData} from '../store/actions/user';

const useAppInitialization = () => {
  const dispatch = useDispatch();

  const onAuthStateChanged = user => {
    if (user) {
      dispatch(setFirebaseAuthUserObj(user));
      console.log(user);
    } else {
      dispatch(clearUserData());
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return {};
};

export default useAppInitialization;
