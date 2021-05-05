import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, TouchableHighlight} from 'react-native';
import {Surface} from 'react-native-paper';

import {styles} from './styles';
import {Components} from '../../styles/colors';

const {containerStyle, imageStyle} = styles;

const MenuCard = ({title, imageURL, onPress}) => {
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
  title: PropTypes.string,
  imageURL: PropTypes.string,
  onPress: PropTypes.func,
};

MenuCard.defaultProps = {
  title: '',
  imageURL: null,
  onPress: () => {},
};

export default MenuCard;
