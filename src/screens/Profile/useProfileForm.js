import {useState, useEffect} from 'react';

import useFetchUserProfile from '../../hooks/useFetchUserProfile';
import {set} from 'react-native-reanimated';

const useProfileForm = () => {
  const {data, loading, error, onRetry} = useFetchUserProfile();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [phone1, setPhone1] = useState();
  const [phone2, setPhone2] = useState();
  const [facebookURL, setFacebookURL] = useState();
  const [instagramURL, setInstagramURL] = useState();
  const [twitterURL, setTwitterURL] = useState();
  const [youtubeURL, setYoutubeURL] = useState();

  useEffect(() => {
    const {
      name,
      email,
      address,
      phone1,
      phone2,
      facebook,
      instagram,
      twitter,
      youtube,
    } = data || {};

    setName(name);
    setEmail(email);
    setAddress(address);
    setPhone1(phone1);
    setPhone2(phone2);
    setFacebookURL(facebook);
    setInstagramURL(instagram);
    setTwitterURL(twitter);
    setYoutubeURL(youtube);
  }, [data]);

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
