import {useState} from 'react';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {FIRESTORE_COLLECTION} from '../constants';

const useUpdateMenu = () => {
  const {firebaseAuthUserObj} = useSelector(state => state.user);
  const [loading, setLoading] = useState();
  const [success, setSuccess] = useState();

  const {uid} = firebaseAuthUserObj || {};

  const onAddNewMenuSection = () => {};

  const onUpdateMenuSection = () => {};

  const onAddNewMenuItem = () => {};

  const onUpdateMenuItem = () => {};

  return {loading, success, onUpdateUserDoc};
};

export default useUpdateMenu;
