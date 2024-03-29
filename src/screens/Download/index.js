import Clipboard from '@react-native-clipboard/clipboard';
import CameraRoll from '@react-native-community/cameraroll';
import React, {useRef} from 'react';
import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  ToastAndroid,
  View,
  Alert,
} from 'react-native';
import RNFS from 'react-native-fs';
import QRCode from 'react-native-qrcode-svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {Button} from '../../components';
import {styles} from './styles';

const {
  containerStyle,
  buttonContainerStyle,
  profileURLContainerStyle,
  profileURLTextStyle,
  titleTextStyle,
} = styles;

const Download = () => {
  const {firebaseAuthUserObj} = useSelector(state => state.user);
  const {uid} = firebaseAuthUserObj || {};

  let myQRCode = useRef();

  const saveQrToDisk = async () => {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      Alert.alert(
        'Online Menu',
        'Please enable storage permission in your phone settings to download the QR Code',
        [
          {
            text: 'OK',
            onPress: () => {},
            style: 'cancel',
          },
        ],
      );

      return;
    }

    if (Platform.OS === 'ios') {
      return;
    }

    try {
      myQRCode.toDataURL(data => {
        RNFS.writeFile(RNFS.CachesDirectoryPath + '/menu.png', data, 'base64')
          .then(success => {
            return CameraRoll.save(RNFS.CachesDirectoryPath + '/menu.png');
          })
          .then(() => {
            ToastAndroid.show('Saved to gallery !!', ToastAndroid.SHORT);
          });
      });
    } catch (error) {
      // console.log(error);
    }
  };

  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  };

  const copyToClipboard = () => {
    Clipboard.setString(`https://onlinemenu.today/menu/${uid}`);
    ToastAndroid.show('Copied', ToastAndroid.SHORT);
  };

  return (
    <SafeAreaView style={containerStyle}>
      <ScrollView style={{flex: 1 / 3, margin: 25}}>
        <QRCode
          getRef={ref => (myQRCode = ref)}
          value={`https://onlinemenu.today/menu/${uid}`}
          size={1024}
        />
      </ScrollView>
      <View style={{marginHorizontal: 20, marginTop: 25}}>
        <Text style={titleTextStyle}>Your Menu URL</Text>
      </View>
      <View style={profileURLContainerStyle}>
        <Text
          style={
            profileURLTextStyle
          }>{`https://onlinemenu.today/menu/${uid}`}</Text>
        <MaterialCommunityIcons
          name="content-copy"
          size={25}
          onPress={copyToClipboard}
        />
      </View>

      <View style={buttonContainerStyle}>
        <Button label="DOWNLOAD QR CODE" onPress={saveQrToDisk} />
      </View>
    </SafeAreaView>
  );
};

export default Download;
