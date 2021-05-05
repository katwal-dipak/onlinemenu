import React from 'react';
import {useSelector} from 'react-redux';
import {Button} from '../../components';
import useUpdateUserProfile from '../../hooks/useUpdateUserProfile';

const SubmitButton = ({navigation}) => {
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
  const {loading, success, onUpdateUserDoc} = useUpdateUserProfile(navigation);

  const onPressSubmit = () => {
    const data = {
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

    onUpdateUserDoc(data);
  };

  const onPressDone = () => {
    navigation.goBack();
  };

  return success ? (
    <Button label="DONE" onPress={onPressDone} />
  ) : (
    <Button
      loading={loading}
      disabled={loading ? true : false}
      onPress={onPressSubmit}
    />
  );
};

export default SubmitButton;
