import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import useFetchUserProfile from '../../hooks/useFetchUserProfile';

const useProfileForm = () => {
  const dispatch = useDispatch();
  const {loading, error, onRetry} = useFetchUserProfile();

  const {
    name,
    email,
    address,
    phone1,
    phone2,
    facebookURL,
    instagramURL,
    twitterURL,
    youtubeURL,
  } = useSelector(state => state.profile);

  return {
    loading,
    name,
    email,
    address,
    phone1,
    phone2,
    facebookURL,
    instagramURL,
    twitterURL,
    youtubeURL,
  };
};

export default useProfileForm;
