import React from 'react';
import {View, Text, Platform, Linking, SafeAreaView} from 'react-native';
//import Share from 'react-native-share';
//import DeviceInfo from 'react-native-device-info';
import {useSelector} from 'react-redux';

import {Divider} from '../../components';
import RowItem from './RowItem';
import Header from './Header';

import {Components} from '../../styles/colors';

const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=app.sangalo.android';

const APP_STORE_URL = 'https://apps.apple.com/us/app/sangalo/id1550242573';

const Settings = ({navigation}) => {
  const {firebaseAuthUserObj, userData} = useSelector(state => state.user);
  const {uid, photoURL, email, displayName} = firebaseAuthUserObj || {};

  const onPressProfile = async () => {};

  const Profile = () => {
    return (
      <Header
        onPress={onPressProfile}
        loggedIn={firebaseAuthUserObj && uid ? true : false}
        email={email}
        name={displayName}
        photoURL={photoURL}
      />
    );
  };

  const onPressRowItem = route_name => {};

  const onPressShare = () => {
    const shareOptions = {
      title: 'Sangalo',
      message: `${GOOGLE_PLAY_URL} \n \n ${APP_STORE_URL}`,
    };

    Share.open(shareOptions)
      .then(res => {
        //console.log(res);
      })
      .catch(err => {
        // err && console.log(err);
      });
  };

  const onPressRateSangalo = () => {
    let URL = GOOGLE_PLAY_URL;

    if (Platform.OS === 'ios') {
      URL = APP_STORE_URL;
    }

    Linking.canOpenURL(URL).then(supported => {
      if (supported) {
        Linking.openURL(URL);
      }
    });
  };

  const onPressAbout = () => {
    const URL = 'https://sangalocosmetics.com/';

    Linking.canOpenURL(URL).then(supported => {
      if (supported) {
        Linking.openURL(URL);
      }
    });
  };

  const RenderRows = () => {
    return (
      <View>
        <RowItem
          iconName="receipt"
          label="My Orders"
          onPress={() => onPressRowItem('orders')}
        />
        <Divider />
        <RowItem
          iconName="ios-location"
          label="Delivery Address"
          onPress={() => onPressRowItem('settings_address')}
        />
        <Divider />
        <RowItem
          iconName="information-circle"
          label="Contact Us"
          onPress={onPressAbout}
        />
        <Divider />
        <RowItem
          iconName={
            Platform.OS === 'ios'
              ? 'logo-apple-appstore'
              : 'logo-google-playstore'
          }
          label="Feedbacks"
          onPress={onPressRateSangalo}
        />
        <Divider />
        <RowItem iconName="share" label="Share" onPress={onPressShare} />
      </View>
    );
  };

  const RenderAppVersion = () => {
    try {
      const appVersion = '1.0.0';

      return <Text>{`Version  ${appVersion}`}</Text>;
    } catch (error) {
      //
    }

    return <View />;
  };

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: Components.Background.core}}>
      <View
        style={{flex: 1, backgroundColor: Components.Background.tint75Percent}}>
        <Profile />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
