import PropTypes from 'prop-types';
import React from 'react';
import {TextInput as MaterialTextInput} from 'react-native-paper';
import {Components} from '../../styles/colors';
import {TextStyles} from '../../styles/text';

const TextInput = ({label, value, onChangeText, placeholder}) => {
  return (
    <MaterialTextInput
      label={label}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      selectionColor={Components.Text.H1}
      theme={{
        colors: {
          primary: Components.Text.H1,
          underlineColor: 'transparent',
        },
      }}
      underlineColor={Components.Border}
      style={{
        backgroundColor: Components.Background.core,
        fontSize: 14,
        fontStyle: TextStyles.H1Regular,
        paddingHorizontal: 0,
      }}
      autoCorrect={false}
      autoCapitalize="none"
    />
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
};

TextInput.defaultProps = {
  label: 'Label',
  value: '',
  placeholder: '',
  onChangeText: () => {},
};

export default TextInput;