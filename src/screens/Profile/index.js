import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import {Button, TextInput} from '../../components';
import {styles} from './styles';

const {containerStyle, buttonContainerStyle, titleTextStyle} = styles;

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={containerStyle}>
      <ScrollView
        style={containerStyle}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <TextInput label="Name" placeholder="Business name" />
        <TextInput label="Address" placeholder="Enter full address" />

        <Text style={titleTextStyle}>Contact</Text>
        <TextInput label="Email" />
        <TextInput label="Phone Number 1" />
        <TextInput label="Phone Number 2" />

        <Text style={titleTextStyle}>Social Media</Text>
        <TextInput label="Facebook" />
        <TextInput label="Instagram" placeholder="https://www.instagram.com" />
        <TextInput label="Twitter" />
        <TextInput label="Youtube" placeholder="Youtube channel URL" />
        <Text style={titleTextStyle}>About</Text>

        <TextInput label="About Your Business" />
      </ScrollView>
      <View style={buttonContainerStyle}>
        <Button />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
