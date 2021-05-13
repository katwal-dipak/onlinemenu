import React from 'react';
import {Linking, Platform, SafeAreaView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {Divider} from '../../components';
import useAuthentication from '../../hooks/useAuthentication';
import {Components} from '../../styles/colors';
import {TextStyles} from '../../styles/text';
import Header from './Header';
import RowItem from './RowItem';

const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=app.sangalo.android';

const APP_STORE_URL = 'https://apps.apple.com/us/app/sangalo/id1550242573';

const Settings = ({navigation}) => {
  const {firebaseAuthUserObj} = useSelector(state => state.user);
  const {uid} = firebaseAuthUserObj || {};

  const {loading, onPressLogout} = useAuthentication();

  const Profile = () => {
    return <Header navigation={navigation} />;
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

  const onPressManageSubscription = () => {
    /*const URL = 'https://onlinemenu.today/';

    Linking.canOpenURL(URL).then(supported => {
      if (supported) {
        Linking.openURL(URL);
      }
    });*/

    navigation.navigate('pricing');
  };

  const RowDivider = () => {
    return (
      <View style={{marginHorizontal: 15}}>
        <Divider />
      </View>
    );
  };

  const RenderRows = () => {
    return (
      <View style={{margin: 0}}>
        <RowItem
          label="Profile"
          onPress={() => {
            navigation.navigate('profile');
          }}
        />
        <RowDivider />
        <RowItem
          label="Menu"
          onPress={() => {
            navigation.navigate('menu');
          }}
        />
        <RowDivider />
        <RowItem label="Subscription" onPress={onPressManageSubscription} />

        <RowDivider />
        <RowItem label="Share" onPress={onPressShare} />
        <RowDivider />
        <RowItem label="Feedbacks" onPress={onPressRateSangalo} />
        {uid ? (
          <View>
            <RowDivider />
            <RowItem
              label="QR Code"
              onPress={() => navigation.navigate('download')}
            />
          </View>
        ) : (
          <View />
        )}
        {uid ? (
          <View>
            <RowDivider />
            <RowItem
              label="Sign Out"
              onPress={loading ? null : onPressLogout}
            />
          </View>
        ) : (
          <View />
        )}
      </View>
    );
  };

  const RenderAppVersion = () => {
    try {
      const appVersion = '1.0.0';

      return (
        <Text
          style={{
            ...TextStyles.H2Regular,
            margin: 15,
          }}>{`Version  ${appVersion}`}</Text>
      );
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
        <RenderRows />
        <RenderAppVersion />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
