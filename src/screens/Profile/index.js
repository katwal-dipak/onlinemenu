import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import {Button, TextInput} from '../../components';
import {styles} from './styles';

const {
  containerStyle,
  formContainerStyle,
  buttonContainerStyle,
  titleTextStyle,
} = styles;

const Profile = ({navigation}) => {
  const Spacer = () => <View style={{marginTop: 10}} />;

  return (
    <SafeAreaView style={containerStyle}>
      <View style={formContainerStyle}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <TextInput label="Name" placeholder="Business name" />
          <Spacer />
          <TextInput label="Address" placeholder="Enter full address" />

          <Text style={titleTextStyle}>Contact</Text>
          <Spacer />
          <TextInput label="Email" />
          <Spacer />
          <TextInput label="Phone Number 1" />
          <Spacer />
          <TextInput label="Phone Number 2" />
          <Spacer />

          <Text style={titleTextStyle}>Social Media</Text>
          <Spacer />
          <TextInput label="Facebook" />
          <Spacer />
          <TextInput
            label="Instagram"
            placeholder="https://www.instagram.com"
          />
          <Spacer />
          <TextInput label="Twitter" />
          <Spacer />
          <TextInput label="Youtube" placeholder="Youtube channel URL" />
        </ScrollView>
      </View>

      <View style={buttonContainerStyle}>
        <Button />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
