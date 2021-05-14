import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FIRESTORE_COLLECTION} from '../constants';
import {setPreviousProfileData} from '../store/actions/profile';

const useFetchUserProfile = () => {
  const dispatch = useDispatch();
  const {firebaseAuthUserObj} = useSelector(state => state.user);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const {uid} = firebaseAuthUserObj || {};

  useEffect(() => {
    async function fetchDataFromServer() {
      setLoading(true);
      await fetchData();
      setLoading(false);
    }

    fetchDataFromServer();
  }, [uid]);

  const fetchData = async () => {
    if (uid) {
      try {
        const userDocRef = FIRESTORE_COLLECTION.USERS.doc(uid);
        const doc = await userDocRef.get();

        if (doc.exists) {
          setError();
          dispatch(setPreviousProfileData(doc.data()));
        }
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    }
  };

  const onRetry = async () => {
    setError(false);
    setLoading(true);
    await fetchData();
    setLoading(false);
  };

  return {
    loading,
    error,
    onRetry,
  };
};

export default useFetchUserProfile;
