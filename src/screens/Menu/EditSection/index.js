import React, {useState, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, CheckBoxLabel, TextInput} from '../../../components';
import useUpdateMenu from '../../../hooks/useUpdateMenu';
import {styles} from './styles';

const {containerStyle, cardContainerStyle, buttonContainerStyle} = styles;

const EditSection = ({navigation, route}) => {
  const {item} = route.params || {};

  const [title, setTitle] = useState();
  const [active, setStatus] = useState();

  const {loading, success, onUpdateMenuSection} = useUpdateMenu();

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

export default EditSection;
