import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FIRESTORE_COLLECTION} from '../constants';
import {setTheme} from '../store/actions/profile';

const useApplyTheme = () => {
  const dispatch = useDispatch();
  const {firebaseAuthUserObj} = useSelector(state => state.user);

  const [loading, setLoading] = useState();
  const [success, setSuccess] = useState();

  const {uid} = firebaseAuthUserObj || {};
  const userDocRef = FIRESTORE_COLLECTION.USERS.doc(uid);

  const onApplyTheme = async themeId => {
    setLoading(true);

    try {
      await userDocRef.update({themeId: themeId});
      dispatch(setTheme(themeId));
      setSuccess(true);
    } catch (error) {
      setLoading(false);
    }

    setLoading(false);
  };

  return {
    loading,
    success,
    onApplyTheme,
  };
};

export default useApplyTheme;
