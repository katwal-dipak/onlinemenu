import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import {FIRESTORE_COLLECTION} from '../constants';

const useFetchUserProfile = () => {
  const {firebaseAuthUserObj} = useSelector(state => state.user);
  const [data, setData] = useState();
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
  }, []);

  const fetchData = async () => {
    if (uid) {
      try {
        const userDocRef = FIRESTORE_COLLECTION.USERS.doc(uid);
        const doc = await userDocRef.get();

        if (doc.exists) {
          setError();
          setData(doc.data());
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
    data,
    loading,
    error,
    onRetry,
  };
};

export default useFetchUserProfile;
