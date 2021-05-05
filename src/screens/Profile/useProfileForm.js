import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import useFetchUserProfile from '../../hooks/useFetchUserProfile';
import {
  setName,
  setEmail,
  setAddress,
  setPhone1,
  setFacebookURL,
  setInstagramURL,
  setTwitterURL,
  setYoutubeURL,
} from '../../store/actions/profile';

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

  const onChangeName = value => {
    dispatch(setName(value));
  };

  const onChangeEmail = value => {
    dispatch(setEmail(value));
  };

  const onChangeAddress = value => {
    dispatch(setAddress(value));
  };

  const onChangePhone1 = value => {
    dispatch(setPhone1(value));
  };

  const onChangePhone2 = value => {
    dispatch(setPhone2(value));
  };

  const onChangeFacebookURL = value => {
    dispatch(setFacebookURL(value));
  };

  const onChangeInstagramURL = value => {
    dispatch(setInstagramURL(value));
  };

  const onChangeTwitterURL = value => {
    dispatch(setTwitterURL(value));
  };

  const onChangeYoutubeURL = value => {
    dispatch(setYoutubeURL(value));
  };

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
    onChangeName,
    onChangeAddress,
    onChangeEmail,
    onChangePhone1,
    onChangePhone2,
    onChangeFacebookURL,
    onChangeInstagramURL,
    onChangeTwitterURL,
    onChangeYoutubeURL,
  };
};

export default useProfileForm;
