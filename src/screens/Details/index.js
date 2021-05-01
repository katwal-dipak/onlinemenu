import CameraRoll from '@react-native-community/cameraroll';
import React, {useRef} from 'react';
import {PermissionsAndroid, Platform, ToastAndroid, View} from 'react-native';
import RNFS from 'react-native-fs';
import {MenuCard, Button} from '../../components';

const Home = ({route}) => {
  const {item} = route.params || {};
  const {imageURL} = item || {};

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
      <View style={{alignSelf: 'center'}}>
        <MenuCard imageURL={imageURL} />
      </View>

      <Button
        type="outline"
        label="Preview"
        containerStyle={{marginHorizontal: 100, marginTop: 15}}
      />
    </View>
  );
};

export default Home;
/**
 *     <QRCode
        getRef={ref => (myQRCode = ref)}
        value="https://sangalocosmetics.com/"
        size={300}
      />
 */
