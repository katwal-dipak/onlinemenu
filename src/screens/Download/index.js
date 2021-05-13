import CameraRoll from '@react-native-community/cameraroll';
import React, {useRef} from 'react';
import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  ScrollView,
  ToastAndroid,
  View,
} from 'react-native';
import RNFS from 'react-native-fs';
import QRCode from 'react-native-qrcode-svg';
import {Button} from '../../components';
import {styles} from './styles';

const {containerStyle, buttonContainerStyle} = styles;

const Download = () => {
  let myQRCode = useRef();

  const saveQrToDisk = async () => {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
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
      console.log(error);
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

  return (
    <SafeAreaView style={containerStyle}>
      <ScrollView style={{flex: 1}}>
        <QRCode
          getRef={ref => (myQRCode = ref)}
          value="https://sangalocosmetics.com/"
          size={512}
        />
      </ScrollView>

      <View style={buttonContainerStyle}>
        <Button label="DOWNLOAD" onPress={saveQrToDisk} />
      </View>
    </SafeAreaView>
  );
};

export default Download;
