import React from 'react';
import {Image, Linking, Modal, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {Button} from '../../components';
import useApplyTheme from '../../hooks/useApplyTheme';
import {Theme} from '../../styles/colors';
import styles from './styles';

const {
  container,
  cardContainer,
  imageStyle,
  titleTextStyle,
  previewTextStyle,
} = styles;

const Details = ({item, visible, toggle, navigation}) => {
  const {id, price, imageURL, plan, previewURL} = item || {};
  const {themeId} = useSelector(state => state.profile);
  const {firebaseAuthUserObj} = useSelector(state => state.user);
  const {loading, onApplyTheme} = useApplyTheme();

  const {uid} = firebaseAuthUserObj || {};
  const isActiveTheme = id === themeId;

  const onPressPreview = () => {
    const URL = previewURL;

    Linking.canOpenURL(URL).then(supported => {
      if (supported) {
        Linking.openURL(URL);
      }
    });
  };

  /*const onPressUpgradePlan = () => {
    const URL = 'https://onlinemenu.today';

    Linking.canOpenURL(URL).then(supported => {
      if (supported) {
        Linking.openURL(URL);
      }
    });
  };*/

  const onPressApplyTheme = () => {
    onApplyTheme(id);
  };

  const onPressLoginToApply = () => {
    toggle();
    navigation.navigate('settings');
  };

  const RenderButton = () => {
    if (!uid) {
      return (
        <Button
          label={'LOGIN TO APPLY THEME'}
          containerStyle={{
            paddingHorizontal: 15,
            flex: 1,
          }}
          onPress={onPressLoginToApply}
        />
      );
    }

    return (
      <Button
        label={isActiveTheme ? 'CURRENTLY ACTIVE' : 'APPLY THEME'}
        containerStyle={{
          paddingHorizontal: 15,
          flex: 1,
        }}
        onPress={isActiveTheme ? () => {} : onPressApplyTheme}
        loading={loading}
        color={isActiveTheme ? Theme.SecondaryColor : null}
      />
    );
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
            <RenderButton />
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
