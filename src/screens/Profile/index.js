import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {ActivityIndicator, TextInput} from '../../components';
import {styles} from './styles';
import SubmitButton from './SubmitButton';
import useProfileForm from './useProfileForm';

const {
  containerStyle,
  formContainerStyle,
  cardContainerStyle,
  buttonContainerStyle,
  titleTextStyle,
} = styles;

const Profile = ({navigation}) => {
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
              maxLength={50}
            />
            <Spacer />
            <TextInput
              label="Address"
              placeholder="Enter full address"
              value={address}
              onChangeYoutubeURL={onChangeAddress}
              maxLength={200}
            />
          </View>

          <Text style={titleTextStyle}>Contact</Text>
          <Spacer />
          <View style={cardContainerStyle}>
            <TextInput
              label="Email"
              value={email}
              onChangeText={onChangeEmail}
              maxLength={100}
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
