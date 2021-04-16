import React from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';

import {styles} from './styles';
import {Components} from '../../styles/colors';

const {containerStyle} = styles;

const MenuCard = ({title, imageURL}) => {
  return (
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
  );
};

MenuCard.propTypes = {
  title: PropTypes.string,
  imageURL: PropTypes.string,
};

MenuCard.defaultProps = {
  title: '',
  imageURL: null,
};

export default MenuCard;
