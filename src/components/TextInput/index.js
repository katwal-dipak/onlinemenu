import PropTypes from 'prop-types';
import React from 'react';
import {TextInput as MaterialTextInput} from 'react-native-paper';
import {Components} from '../../styles/colors';
import {TextStyles} from '../../styles/text';

const TextInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  multiline,
  numberOfLines,
  maxLength,
}) => {
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
      multiline={multiline}
      numberOfLines={numberOfLines}
      maxLength={maxLength}
    />
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  maxLength: PropTypes.number,
};

TextInput.defaultProps = {
  label: 'Label',
  value: '',
  placeholder: '',
  onChangeText: () => {},
  multiline: false,
  numberOfLines: 1,
  maxLength: 500,
};

export default TextInput;
