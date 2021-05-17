import React, {useState, useEffect, useLayoutEffect} from 'react';
import {SafeAreaView, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button, CheckBoxLabel, TextInput} from '../../../components';
import useUpdateMenu from '../../../hooks/useUpdateMenu';
import {styles} from './styles';
import {Components} from '../../../styles/colors';

const {containerStyle, cardContainerStyle, buttonContainerStyle} = styles;

const EditSection = ({navigation, route}) => {
  const {item} = route.params || {};

  const [title, setTitle] = useState();
  const [active, setStatus] = useState();

  const {
    loading,
    success,
    onUpdateMenuSection,
    onRemoveMenuSection,
  } = useUpdateMenu();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            onRemoveMenuSection();
          }}>
          <Ionicons
            name="trash-bin-outline"
            size={25}
            color={Components.Warning}
            style={{paddingHorizontal: 10}}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  useEffect(() => {
    const {title, active} = item || {};

    setTitle(title);
    setStatus(active);
  }, []);

  const onChangeTitle = value => {
    setTitle(value);
  };

  const onToggleStatus = () => {
    setStatus(!active);
  };

  const onPressSubmit = () => {
    onUpdateMenuSection({
      title,
      active,
    });
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
        <TextInput
          label="Title"
          placeholder="eg. Breakfast, Lunch, Dinner"
          value={title}
          onChangeText={onChangeTitle}
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

export default EditSection;
