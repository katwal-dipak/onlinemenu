import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, CheckBoxLabel, TextInput} from '../../../components';
import {styles} from './styles';

import useUpdateMenu from '../../../hooks/useUpdateMenu';

const {containerStyle, cardContainerStyle, buttonContainerStyle} = styles;

const EditMenuItem = ({navigation, route}) => {
  const {item} = route.params || {};

  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [active, setStatus] = useState();

  const {loading, success, onUpdateMenuItem} = useUpdateMenu();

  useEffect(() => {
    const {title, description, active, price} = item || {};

    setTitle(title);
    setPrice(price);
    setDescription(description);
    setStatus(active);
  }, []);

  const onChangeTitle = value => {
    setTitle(value);
  };

  const onChangePrice = value => {
    setPrice(value);
  };

  const onChangeDescription = value => {
    setDescription(value);
  };

  const onToggleStatus = () => {
    setStatus(!active);
  };

  const onPressSubmit = () => {
    onUpdateMenuItem({
      title,
      price,
      description,
      active,
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
          multiline
          numberOfLines={8}
        />
        <View style={{marginTop: 10}} />
        <CheckBoxLabel
          title={
            active
              ? 'Active (visible to public)'
              : 'Active (hidden from public)'
          }
          checked={active}
          onPress={onToggleStatus}
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

export default EditMenuItem;
