import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, CheckBoxLabel, TextInput} from '../../../components';
import {styles} from './styles';

const {containerStyle, cardContainerStyle, buttonContainerStyle} = styles;

const EditSection = ({navigation}) => {
  return (
    <SafeAreaView style={containerStyle}>
      <View style={cardContainerStyle}>
        <TextInput
          label="Title"
          placeholder="eg. Breakfast, Lunch, Dinner"
          value={null}
          // onChangeText={onChangeName}
        />
        <View style={{marginTop: 10}} />
        <CheckBoxLabel title="Active" checked />
      </View>

      <View style={buttonContainerStyle}>
        <Button label="SUBMIT" />
      </View>
    </SafeAreaView>
  );
};

export default EditSection;
