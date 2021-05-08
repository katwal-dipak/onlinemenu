import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, TextInput} from '../../../components';
import {styles} from './styles';

const {containerStyle, cardContainerStyle, buttonContainerStyle} = styles;

const AddSection = ({navigation}) => {
  return (
    <SafeAreaView style={containerStyle}>
      <View style={cardContainerStyle}>
        <TextInput
          label="Title"
          value={null}
          // onChangeText={onChangeName}
        />
        <View style={{marginTop: 10}} />
      </View>
      <View style={buttonContainerStyle}>
        <Button label="SUBMIT" />
      </View>
    </SafeAreaView>
  );
};

export default AddSection;
