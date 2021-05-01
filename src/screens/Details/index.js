import CameraRoll from '@react-native-community/cameraroll';
import React, {useRef} from 'react';
import {
  PermissionsAndroid,
  Platform,
  ToastAndroid,
  View,
  Modal,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import RNFS from 'react-native-fs';
import {Button} from '../../components';

import styles from './styles';

const {container, cardContainer, imageStyle} = styles;

const Details = ({item, visible, toggle}) => {
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
    <Modal
      visible={visible}
      animationType="fade"
      onRequestClose={toggle}
      transparent>
      <View style={container} onPress={toggle}>
        <View style={cardContainer}>
          <Image
            resizeMode="cover"
            style={imageStyle}
            source={{
              uri: imageURL,
              cache: 'force-cache',
            }}
          />
          <Button
            type="outline"
            label="Preview"
            containerStyle={{marginHorizontal: 100, marginTop: 15}}
            onPress={toggle}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Details;
/**
 *     <QRCode
        getRef={ref => (myQRCode = ref)}
        value="https://sangalocosmetics.com/"
        size={300}
      />
 */
