import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FIRESTORE_COLLECTION} from '../constants';
import {setMenu} from '../store/actions/menu';

const useUpdateMenu = () => {
  const dispatch = useDispatch();
  const {firebaseAuthUserObj} = useSelector(state => state.user);
  const {menu} = useSelector(state => state.menu);
  const [loading, setLoading] = useState();
  const [success, setSuccess] = useState();

  const {uid} = firebaseAuthUserObj || {};
  const userDocRef = FIRESTORE_COLLECTION.USERS.doc(uid);

  const onAddNewMenuSection = async item => {
    setLoading(true);
    const newMenu = menu && Array.isArray(menu) ? [...menu] : [];
    newMenu.push(item);

    try {
      await userDocRef.update({menu: newMenu});
      dispatch(setMenu(newMenu));
      setSuccess(true);
    } catch (error) {
      setLoading(false);
    }

    setLoading(false);
  };

  const onUpdateMenuSection = () => {};

  const onAddNewMenuItem = () => {};

  const onUpdateMenuItem = () => {};

  return {
    loading,
    success,
    onAddNewMenuSection,
    onUpdateMenuSection,
    onAddNewMenuItem,
    onUpdateMenuItem,
  };
};

export default useUpdateMenu;
