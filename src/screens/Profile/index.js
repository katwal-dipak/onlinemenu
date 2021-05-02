import React from 'react';
import {Linking, SafeAreaView, ScrollView, View} from 'react-native';
import {Button, TextInput} from '../../components';
import {styles} from './styles';

const {containerStyle, buttonContainerStyle} = styles;

const Profile = ({navigation}) => {
  const onPressManageSubscription = () => {
    const URL = 'https://onlinemenu.today/';

    Linking.canOpenURL(URL).then(supported => {
      if (supported) {
        Linking.openURL(URL);
      }
    });
  };

  return (
    <SafeAreaView style={containerStyle}>
      <ScrollView
        style={containerStyle}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <TextInput />
      </ScrollView>
      <View style={buttonContainerStyle}>
        <Button onPress={onPressManageSubscription} />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
