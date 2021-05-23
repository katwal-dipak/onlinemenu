import React, {useEffect, useLayoutEffect, useState} from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {Button, CheckBoxLabel, TextInput} from '../../../components';
import useUpdateMenu from '../../../hooks/useUpdateMenu';
import {Components} from '../../../styles/colors';
import {styles} from './styles';

const {containerStyle, cardContainerStyle, buttonContainerStyle} = styles;

const EditSection = ({navigation, route}) => {
  const {item} = route.params || {};
  const {menu} = useSelector(state => state.menu);

  const [title, setTitle] = useState();
  const [active, setStatus] = useState();

  const {
    loading,
    success,
    onUpdateMenuSection,
    onRemoveMenuSection,
  } = useUpdateMenu();

  const menuSectionsLength = menu && Array.isArray(menu) && menu.length;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        menuSectionsLength > 1 ? (
          <TouchableOpacity
            onPress={
              loading || success
                ? () => {}
                : () => {
                    onRemoveMenuSection();
                  }
            }>
            <Ionicons
              name="trash-bin-outline"
              size={25}
              color={
                success || loading ? Components.Text.H3 : Components.Warning
              }
              style={{paddingHorizontal: 10}}
            />
          </TouchableOpacity>
        ) : (
          <View />
        ),
    });
  }, [loading, success, menuSectionsLength]);

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
          maxLength={25}
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
