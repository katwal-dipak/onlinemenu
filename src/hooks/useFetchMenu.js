import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FIRESTORE_COLLECTION} from '../constants';
import {setMenu} from '../store/actions/menu';

const useFetchMenu = () => {
  const dispatch = useDispatch();
  const {firebaseAuthUserObj} = useSelector(state => state.user);
  const [loading, setLoading] = useState();

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
    const userDocRef = FIRESTORE_COLLECTION.USERS.doc(uid);
    try {
      const doc = await userDocRef.get();

      if (doc.exists) {
        const {menu} = doc.data();
        dispatch(setMenu(menu));
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return {
    loading,
  };
};

export default useFetchMenu;
