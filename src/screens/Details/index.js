import CameraRoll from '@react-native-community/cameraroll';
import React, {useRef} from 'react';
import {
  Image,
  Modal,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
  View,
  Text,
  Linking,
} from 'react-native';
import RNFS from 'react-native-fs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button} from '../../components';
import styles from './styles';

const {
  container,
  cardContainer,
  imageStyle,
  titleTextStyle,
  previewTextStyle,
} = styles;

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

  const onPressPreview = () => {
    const URL = 'https://onlinemenu.today/template2';

    Linking.canOpenURL(URL).then(supported => {
      if (supported) {
        Linking.openURL(URL);
      }
    });
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
          <Text style={titleTextStyle}>$ 0.99 Per Month</Text>
          <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
            <Button
              label="UPGRADE PLAN TO APPLY"
              containerStyle={{paddingHorizontal: 15, flex: 1}}
              onPress={toggle}
            />
            <View style={{alignItems: 'center', paddingHorizontal: 15}}>
              <Ionicons
                name="expand-outline"
                size={35}
                onPress={onPressPreview}
              />
              <Text style={previewTextStyle}>Preview</Text>
            </View>
          </View>
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
