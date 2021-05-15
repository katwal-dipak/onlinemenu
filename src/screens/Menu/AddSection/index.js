import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, TextInput} from '../../../components';
import useUpdateMenu from '../../../hooks/useUpdateMenu';
import {styles} from './styles';

const {containerStyle, cardContainerStyle, buttonContainerStyle} = styles;

const AddSection = ({navigation}) => {
  const [title, setTitle] = useState();

  const {loading, success, onAddNewMenuSection} = useUpdateMenu();

  const onChangeTitle = value => {
    setTitle(value);
  };

  const onPressSubmit = () => {
    onAddNewMenuSection({title, active: true});
  };

  const onPressDone = () => {
    navigation.goBack();
  };

  const RenderSubmitButton = () => {
    const trimmedTitle = title && title.trim();

    if (success) {
      return <Button label="DONE" onPress={onPressDone} />;
    }

    if (!trimmedTitle) {
      return <Button label="SUBMIT" disabled />;
    }

    return <Button label="SUBMIT" onPress={onPressSubmit} loading={loading} />;
  };

  return (
    <SafeAreaView style={containerStyle}>
      <View style={cardContainerStyle}>
        <TextInput label="Title" value={title} onChangeText={onChangeTitle} />
        <View style={{marginTop: 10}} />
      </View>
      <View style={buttonContainerStyle}>
        <RenderSubmitButton />
      </View>
    </SafeAreaView>
  );
};

export default AddSection;
