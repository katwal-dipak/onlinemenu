import CameraRoll from '@react-native-community/cameraroll';
import React, {useRef} from 'react';
import {
  Image,
  Linking,
  Modal,
  PermissionsAndroid,
  Platform,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import RNFS from 'react-native-fs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {Button} from '../../components';
import useApplyTheme from '../../hooks/useApplyTheme';
import styles from './styles';

const {
  container,
  cardContainer,
  imageStyle,
  titleTextStyle,
  previewTextStyle,
} = styles;

const Details = ({item, visible, toggle}) => {
  const {id, price, imageURL, plan} = item || {};
  const {themeId} = useSelector(state => state.profile);

  const {loading, onApplyTheme} = useApplyTheme();

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

  const onPressUpgradePlan = () => {
    const URL = 'https://onlinemenu.today';

    Linking.canOpenURL(URL).then(supported => {
      if (supported) {
        Linking.openURL(URL);
      }
    });
  };

  const onPressApplyTheme = () => {
    onApplyTheme(id);
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
          <View
            style={{flexDirection: 'row', alignItems: 'baseline', padding: 15}}>
            <Text style={titleTextStyle}>{price}</Text>
            <Text style={previewTextStyle}>{plan > 1 ? `Per Month` : ''}</Text>
          </View>
          <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
            <Button
              label={id === themeId ? 'ACTIVE THEME' : 'APPLY THEME'}
              containerStyle={{paddingHorizontal: 15, flex: 1}}
              onPress={id === themeId ? () => {} : onPressApplyTheme}
              loading={loading}
            />
            <View style={{alignItems: 'center', paddingHorizontal: 15}}>
              <Ionicons
                name="expand-outline"
                size={30}
                onPress={onPressPreview}
              />
              <Text style={previewTextStyle}>Preview</Text>
            </View>
          </View>
          <View style={{position: 'absolute', top: 5, right: 5}}>
            <Ionicons name="ios-close-circle" size={35} onPress={toggle} />
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
