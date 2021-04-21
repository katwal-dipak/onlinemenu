import React, {useRef} from 'react';
import QRCode from 'react-native-qrcode-svg';
import RNFS from 'react-native-fs';

import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  ToastAndroid,
  PermissionsAndroid,
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';

import {MenuCard} from '../../components';

const Home = ({}) => {
  let myQRCode = useRef();

  const saveQrToDisk = async () => {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return;
    }

    myQRCode.toDataURL(data => {
      RNFS.writeFile(RNFS.CachesDirectoryPath + '/menu.png', data, 'base64')
        .then(success => {
          return CameraRoll.save(RNFS.CachesDirectoryPath + '/menu.png');
        })
        .then(() => {
          ToastAndroid.show('Saved to gallery !!', ToastAndroid.SHORT);
        });
    });
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
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <QRCode
        getRef={ref => (myQRCode = ref)}
        value="https://sangalocosmetics.com/"
        size={300}
      />

      <TouchableOpacity
        onPress={saveQrToDisk}
        style={{backgroundColor: 'yellow'}}>
        <Text style={{padding: 15}}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
