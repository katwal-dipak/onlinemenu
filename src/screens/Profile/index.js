import React, {useLayoutEffect} from 'react';
import {
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {ActivityIndicator, TextInput} from '../../components';
import {styles} from './styles';
import SubmitButton from './SubmitButton';
import useProfileForm from './useProfileForm';
import {Components} from '../../styles/colors';

const {
  containerStyle,
  formContainerStyle,
  cardContainerStyle,
  buttonContainerStyle,
  titleTextStyle,
} = styles;

const Profile = ({navigation}) => {
  const {firebaseAuthUserObj} = useSelector(state => state.user);

  const {
    loading,
    name,
    email,
    address,
    phone1,
    phone2,
    facebookURL,
    instagramURL,
    twitterURL,
    youtubeURL,
    onChangeName,
    onChangeAddress,
    onChangeEmail,
    onChangePhone1,
    onChangePhone2,
    onChangeFacebookURL,
    onChangeInstagramURL,
    onChangeTwitterURL,
    onChangeYoutubeURL,
  } = useProfileForm();

  const {uid} = firebaseAuthUserObj || {};

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onPressPreviewButton}>
          <Ionicons
            name="expand-outline"
            size={25}
            color={Components.Button}
            style={{paddingHorizontal: 10}}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  const onPressPreviewButton = () => {
    const menuURL = `http://onlinemenu.today/menu/${uid}`;

    Linking.canOpenURL(menuURL).then(supported => {
      if (supported) {
        Linking.openURL(menuURL);
      }
    });
  };

  const Spacer = () => <View style={{marginTop: 10}} />;

  return loading ? (
    <ActivityIndicator />
  ) : (
    <SafeAreaView style={containerStyle}>
      <View style={formContainerStyle}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View style={cardContainerStyle}>
            <TextInput
              label="Name"
              placeholder="Business name"
              value={name}
              onChangeText={onChangeName}
              maxLength={40}
            />
            <Spacer />
            <TextInput
              label="Address"
              placeholder="Enter full address"
              value={address}
              onChangeText={onChangeAddress}
              maxLength={150}
              multiline
              numberOfLines={2}
            />
          </View>

          <Text style={titleTextStyle}>Contact</Text>
          <Spacer />
          <View style={cardContainerStyle}>
            <TextInput
              label="Email"
              value={email}
              onChangeText={onChangeEmail}
              maxLength={40}
            />
            <Spacer />
            <TextInput
              label="Phone Number 1"
              value={phone1}
              onChangeText={onChangePhone1}
              maxLength={15}
            />
            <Spacer />
            <TextInput
              label="Phone Number 2"
              value={phone2}
              onChangeText={onChangePhone2}
              maxLength={15}
            />
          </View>

          <Spacer />

          <Text style={titleTextStyle}>Social Media</Text>
          <Spacer />
          <View style={cardContainerStyle}>
            <TextInput
              label="Facebook"
              value={facebookURL}
              onChangeText={onChangeFacebookURL}
              multiline
              numberOfLines={3}
              maxLength={250}
            />
            <Spacer />
            <TextInput
              label="Instagram"
              placeholder="https://www.instagram.com"
              value={instagramURL}
              onChangeText={onChangeInstagramURL}
              multiline
              numberOfLines={3}
              maxLength={250}
            />
            <Spacer />
            <TextInput
              label="Twitter"
              value={twitterURL}
              onChangeText={onChangeTwitterURL}
              multiline
              numberOfLines={3}
              maxLength={250}
            />
            <Spacer />
            <TextInput
              label="Youtube"
              placeholder="Youtube channel URL"
              value={youtubeURL}
              onChangeText={onChangeYoutubeURL}
              multiline
              numberOfLines={3}
              maxLength={250}
            />
          </View>
        </ScrollView>
      </View>
      <View style={buttonContainerStyle}>
        <SubmitButton navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
