import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const useAuthentication = () => {
  const [loading, setLoading] = useState(false);

  const onPressLogin = async () => {
    setLoading(true);

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const {idToken} = userInfo || {};
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // Sign-in the user with the credential
      await auth().signInWithCredential(googleCredential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }

      setLoading(false);
    }

    setLoading(false);
  };

  const onPressLogout = async () => {
    setLoading(true);

    //This is google auth, removes user session from the device.
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();

      //This is firebase auth
      await auth().signOut();
    } catch (error) {
      setLoading(false);
    }

    setLoading(false);
  };

  return {
    loading,
    onPressLogin,
    onPressLogout,
  };
};

export default useAuthentication;
