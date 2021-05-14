import auth from '@react-native-firebase/auth';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import useFetchUserProfile from '../hooks/useFetchUserProfile';
import {clearUserData, setFirebaseAuthUserObj} from '../store/actions/user';

const useAppInitialization = () => {
  const dispatch = useDispatch();
  const {loading, error, onRetry} = useFetchUserProfile();

  const onAuthStateChanged = user => {
    if (user) {
      dispatch(setFirebaseAuthUserObj(user));
    } else {
      dispatch(clearUserData());
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return {loading, error, onRetry};
};

export default useAppInitialization;
