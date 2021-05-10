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

  return (
    <SafeAreaView style={containerStyle}>
      <View style={cardContainerStyle}>
        <TextInput label="Title" value={title} onChangeText={onChangeTitle} />
        <View style={{marginTop: 10}} />
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

export default AddSection;
