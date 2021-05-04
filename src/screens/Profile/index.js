import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import {Button, TextInput, ActivityIndicator} from '../../components';
import {styles} from './styles';

import useProfileForm from './useProfileForm';

const {
  containerStyle,
  formContainerStyle,
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
          <TextInput label="Name" placeholder="Business name" value={name} />
          <Spacer />
          <TextInput
            label="Address"
            placeholder="Enter full address"
            value={address}
          />

          <Text style={titleTextStyle}>Contact</Text>
          <Spacer />
          <TextInput label="Email" value={email} />
          <Spacer />
          <TextInput label="Phone Number 1" value={phone1} />
          <Spacer />
          <TextInput label="Phone Number 2" value={phone2} />
          <Spacer />

          <Text style={titleTextStyle}>Social Media</Text>
          <Spacer />
          <TextInput label="Facebook" value={facebookURL} />
          <Spacer />
          <TextInput
            label="Instagram"
            placeholder="https://www.instagram.com"
            value={instagramURL}
          />
          <Spacer />
          <TextInput label="Twitter" value={twitterURL} />
          <Spacer />
          <TextInput
            label="Youtube"
            placeholder="Youtube channel URL"
            value={youtubeURL}
          />
        </ScrollView>
      </View>

      <View style={buttonContainerStyle}>
        <Button />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
