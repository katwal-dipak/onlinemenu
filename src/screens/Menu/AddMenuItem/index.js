import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Button, TextInput} from '../../../components';
import useUpdateMenu from '../../../hooks/useUpdateMenu';
import {styles} from './styles';

const {containerStyle, cardContainerStyle, buttonContainerStyle} = styles;

const AddMenuItem = ({navigation}) => {
  const {selectedMenuSectionIndex} = useSelector(state => state.menu);

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
    onAddNewMenuItem({
      title,
      price,
      description,
      active: true,
    });
  };

  const onPressDone = () => {
    navigation.goBack();
  };

  const RenderSubmitButton = () => {
    const trimmedTitle = title && title.trim();
    const trimmedPrice = price && price.trim();

    if (success) {
      return <Button label="DONE" onPress={onPressDone} />;
    }

    if (!trimmedTitle || !trimmedPrice) {
      return <Button label="SUBMIT" disabled />;
    }

    return <Button label="SUBMIT" onPress={onPressSubmit} loading={loading} />;
  };

  return (
    <SafeAreaView style={containerStyle}>
      <View style={cardContainerStyle}>
        <TextInput
          label="Title"
          value={title}
          onChangeText={onChangeTitle}
          maxLength={35}
        />
        <View style={{marginTop: 10}} />
        <TextInput
          label="Price"
          value={price}
          onChangeText={onChangePrice}
          maxLength={7}
        />
        <View style={{marginTop: 10}} />
        <TextInput
          label="Description"
          value={description}
          onChangeText={onChangeDescription}
          maxLength={300}
        />
      </View>
      <View style={buttonContainerStyle}>
        <RenderSubmitButton />
      </View>
    </SafeAreaView>
  );
};

export default AddMenuItem;
