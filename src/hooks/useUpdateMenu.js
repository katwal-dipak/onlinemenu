import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FIRESTORE_COLLECTION} from '../constants';
import {setMenu} from '../store/actions/menu';

const useUpdateMenu = () => {
  const dispatch = useDispatch();
  const {firebaseAuthUserObj} = useSelector(state => state.user);
  const {menu, selectedMenuSectionIndex, selectedMenuItemIndex} = useSelector(
    state => state.menu,
  );
  const [loading, setLoading] = useState();
  const [success, setSuccess] = useState();

  const {uid} = firebaseAuthUserObj || {};
  const userDocRef = FIRESTORE_COLLECTION.USERS.doc(uid);

  const validateMenu = menuArray => {
    if (menuArray && Array.isArray(menuArray) && menuArray.length > 0) {
      return true;
    }

    return false;
  };

  const onAddNewMenuSection = async item => {
    setLoading(true);
    const newMenu = menu && Array.isArray(menu) ? [...menu] : [];
    newMenu.push(item);

    const isValid = validateMenu(newMenu);
    if (!isValid) {
      setLoading(false);
      return;
    }

    try {
      await userDocRef.update({menu: newMenu});
      dispatch(setMenu(newMenu));
      setSuccess(true);
    } catch (error) {
      setLoading(false);
    }

    setLoading(false);
  };

  const onUpdateMenuSection = async updatedMenuSectionItem => {
    setLoading(true);
    const menuCopy = menu && Array.isArray(menu) ? [...menu] : [];

    const updatedMenu = menuCopy.map((item, index) => {
      if (index === selectedMenuSectionIndex) {
        return {...item, ...updatedMenuSectionItem};
      }

      return item;
    });

    const isValid = validateMenu(updatedMenu);
    if (!isValid) {
      setLoading(false);
      return;
    }

    try {
      await userDocRef.update({menu: updatedMenu});
      dispatch(setMenu(updatedMenu));
      setSuccess(true);
    } catch (error) {
      setLoading(false);
    }

    setLoading(false);
  };

  const onAddNewMenuItem = async newMenuItem => {
    setLoading(true);
    const menuCopy = menu && Array.isArray(menu) ? [...menu] : [];

    const updatedMenu = menuCopy.map((item, index) => {
      if (index === selectedMenuSectionIndex) {
        const {data} = item || {};
        const newMenuItems = data && Array.isArray(data) ? [...data] : [];
        newMenuItems.push(newMenuItem);

        return {...item, data: newMenuItems};
      }

      return item;
    });

    const isValid = validateMenu(updatedMenu);
    if (!isValid) {
      setLoading(false);
      return;
    }

    try {
      await userDocRef.update({menu: updatedMenu});
      dispatch(setMenu(updatedMenu));
      setSuccess(true);
    } catch (error) {
      setLoading(false);
    }

    setLoading(false);
  };

  const onUpdateMenuItem = async updatedMenuItem => {
    setLoading(true);
    const menuCopy = menu && Array.isArray(menu) ? [...menu] : [];

    const updatedMenu = menuCopy.map((item, index) => {
      if (index === selectedMenuSectionIndex) {
        const {data: menuItems} = item || {};
        let newMenuItems =
          menuItems && Array.isArray(menuItems) ? [...menuItems] : [];

        newMenuItems = newMenuItems.map((element, index) => {
          if (index === selectedMenuItemIndex) {
            return updatedMenuItem;
          }

          return element;
        });

        return {...item, data: newMenuItems};
      }

      return item;
    });

    const isValid = validateMenu(updatedMenu);
    if (!isValid) {
      setLoading(false);
      return;
    }

    try {
      await userDocRef.update({menu: updatedMenu});
      dispatch(setMenu(updatedMenu));
      setSuccess(true);
    } catch (error) {
      setLoading(false);
    }

    setLoading(false);
  };

  const onRemoveMenuSection = async () => {
    setLoading(true);
    const menuCopy = menu && Array.isArray(menu) ? [...menu] : [];

    const updatedMenu = menuCopy.filter(
      (element, index) => index !== selectedMenuSectionIndex,
    );

    const isValid = validateMenu(updatedMenu);
    if (!isValid) {
      setLoading(false);
      return;
    }

    try {
      await userDocRef.update({menu: updatedMenu});
      dispatch(setMenu(updatedMenu));
      setSuccess(true);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }

    setLoading(false);
  };

  return {
    loading,
    success,
    onAddNewMenuSection,
    onUpdateMenuSection,
    onAddNewMenuItem,
    onUpdateMenuItem,
    onRemoveMenuSection,
  };
};

export default useUpdateMenu;
