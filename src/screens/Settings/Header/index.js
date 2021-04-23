import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import {Avatar} from 'react-native-elements';

import {styles} from './styles';

const {titleTextStyle, subTitleTextStyle, containerstyle, avatarStyle} = styles;

const Header = ({loggedIn, email, name, photoURL}) => {
  return (
    <TouchableHighlight underlayColor="transparent" onPress={onPress}>
      <View style={containerstyle}>
        <Avatar
          rounded
          size="large"
          source={{uri: photoURL}}
          containerStyle={avatarStyle}
        />
        {loggedIn ? (
          <View>
            <Text style={titleTextStyle}>{name}</Text>
            <Text numberOfLines={2} style={subTitleTextStyle}>
              {email}
            </Text>
          </View>
        ) : (
          <Text style={titleTextStyle}>Login</Text>
        )}
      </View>
    </TouchableHighlight>
  );
};

Header.propTypes = {
  onPress: PropTypes.func,
  user: PropTypes.object,
  loggedIn: PropTypes.bool,
};

Header.defaultProps = {
  onPress: () => {},
  user: {},
  loggedIn: false,
};

export default Header;
