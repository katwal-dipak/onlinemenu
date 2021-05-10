import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, TextInput} from '../../../components';
import useUpdateMenu from '../../../hooks/useUpdateMenu';
import {styles} from './styles';

const {containerStyle, cardContainerStyle, buttonContainerStyle} = styles;

const AddMenuItem = ({navigation, route}) => {
  const {menuSectionIndex} = route.params || {};
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const {loading, success, onAddNewMenuItem} = useUpdateMenu();

  const onChangeTitle = value => {
    setTitle(value);
  };

  const onChangePrice = value => {
    setPrice(value);
  };

  const onChangeDescription = value => {
    setDescription(value);
  };

  const onPressSubmit = () => {
    onAddNewMenuItem(menuSectionIndex, {
      title,
      price,
      description,
      active: true,
    });
  };

  const onPressDone = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={containerStyle}>
      <View style={cardContainerStyle}>
        <TextInput label="Title" value={title} onChangeText={onChangeTitle} />
        <View style={{marginTop: 10}} />
        <TextInput label="Price" value={price} onChangeText={onChangePrice} />
        <View style={{marginTop: 10}} />
        <TextInput
          label="Description"
          value={description}
          onChangeText={onChangeDescription}
        />
      </View>
      <View style={buttonContainerStyle}>
        {success ? (
          <Button label="DONE" onPress={onPressDone} />
        ) : (
          <Button
            label="SUBMIT"
            onPress={onPressSubmit}
            loading={loading}
            disabled={loading ? true : false}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default AddMenuItem;
