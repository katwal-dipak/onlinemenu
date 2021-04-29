import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import {Avatar} from 'react-native-elements';

import {Button} from '../../../components';

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
        <Button
          type="outline"
          label="LOGIN WITH GOOGLE"
          onPress={onPress}
          containerStyle={{padding: 15, backgroundColor: '#FFFFFF'}}
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
