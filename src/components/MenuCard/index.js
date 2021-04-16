import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, TouchableHighlight} from 'react-native';

import {styles} from './styles';
import {Components} from '../../styles/colors';

const {containerStyle} = styles;

const MenuCard = ({title, imageURL, onPress}) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor="transparent">
      <View style={containerStyle}>
        <Image
          resizeMode="cover"
          style={{
            width: '100%',
            aspectRatio: 1,
            backgroundColor: Components.Background.tint75Percent,
          }}
          source={{
            uri: imageURL,
            cache: 'force-cache',
          }}
        />
      </View>
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
