import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import {Avatar} from 'react-native-elements';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

import {styles} from './styles';

const {titleTextStyle, subTitleTextStyle, containerstyle, avatarStyle} = styles;

const Header = ({loggedIn, email, name, photoURL, onPress, loading}) => {
  return (
    <TouchableHighlight underlayColor="transparent" onPress={onPress}>
      {loggedIn ? (
        <View style={containerstyle}>
          <Avatar
            rounded
            size="large"
            source={{uri: photoURL}}
            containerStyle={avatarStyle}
          />
          <View>
            <Text style={titleTextStyle}>{name}</Text>
            <Text numberOfLines={2} style={subTitleTextStyle}>
              {email}
            </Text>
          </View>
        </View>
      ) : (
        <GoogleSigninButton
          style={{width: 250, height: 80}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={onPress}
          disabled={loading ? true : false}
        />
      )}
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
