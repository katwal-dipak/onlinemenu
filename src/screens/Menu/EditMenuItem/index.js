import React, {useEffect, useLayoutEffect, useState} from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button, CheckBoxLabel, TextInput} from '../../../components';
import useUpdateMenu from '../../../hooks/useUpdateMenu';
import {Components} from '../../../styles/colors';
import {styles} from './styles';

const {containerStyle, cardContainerStyle, buttonContainerStyle} = styles;

const EditMenuItem = ({navigation, route}) => {
  const {item} = route.params || {};

  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [active, setStatus] = useState();

  const {
    loading,
    success,
    onUpdateMenuItem,
    onRemoveMenuItem,
  } = useUpdateMenu();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={
            loading || success
              ? () => {}
              : () => {
                  onRemoveMenuItem();
                }
          }>
          <Ionicons
            name="trash-bin-outline"
            size={25}
            color={success || loading ? Components.Text.H3 : Components.Warning}
            style={{paddingHorizontal: 10}}
          />
        </TouchableOpacity>
      ),
    });
  }, [loading, success]);

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
        <RenderSubmitButton />
      </View>
    </SafeAreaView>
  );
};

export default EditMenuItem;
