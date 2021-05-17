import PropTypes from 'prop-types';
import React from 'react';
import {Image, TouchableHighlight} from 'react-native';
import {Surface} from 'react-native-paper';
import {styles} from './styles';

const {containerStyle, imageStyle} = styles;

const MenuCard = ({imageURL, onPress}) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor="transparent">
      <Surface style={containerStyle}>
        <Image
          resizeMode="cover"
          style={imageStyle}
          source={{
            uri: imageURL,
            cache: 'force-cache',
          }}
        />
      </Surface>
    </TouchableHighlight>
  );
};

MenuCard.propTypes = {
  imageURL: PropTypes.string,
  onPress: PropTypes.func,
};

MenuCard.defaultProps = {
  imageURL: null,
  onPress: () => {},
};

export default MenuCard;
