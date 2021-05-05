import {useState} from 'react';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {FIRESTORE_COLLECTION} from '../constants';

const useUpdateUserProfile = () => {
  const {firebaseAuthUserObj} = useSelector(state => state.user);
  const [loading, setLoading] = useState();
  const [success, setSuccess] = useState();

  const {uid} = firebaseAuthUserObj || {};

  const onUpdateUserDoc = async data => {
    setLoading(true);

    try {
      const userDocRef = FIRESTORE_COLLECTION.USERS.doc(uid);

      const doc = await userDocRef.get();

      const combinedData = {
        ...data,
        updatedAt: firestore.FieldValue.serverTimestamp(),
      };

      if (doc.exists) {
        await userDocRef.update(combinedData);
        setSuccess(true);
      } else {
        /**
         * https://firebase.google.com/docs/firestore/manage-data/add-data#set_a_document
         * If you're not sure whether the document exists,
         * pass the option to merge the new data with any existing document to avoid overwriting entire documents.
         */

        await userDocRef.set(
          {...combinedData, id: uid},
          {merge: true}, //this will prevent from accidental overwrite
        );

        setSuccess(true);
      }
    } catch (error) {
      setLoading(false);
    }

    setLoading(false);
  };

  return {loading, success, onUpdateUserDoc};
};

export default useUpdateUserProfile;
