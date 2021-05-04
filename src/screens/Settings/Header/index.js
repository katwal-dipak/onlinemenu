import React from 'react';
import {Text, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {Button} from '../../../components';
import useAuthentication from '../../../hooks/useAuthentication';
import {styles} from './styles';

const {titleTextStyle, subTitleTextStyle, containerstyle, avatarStyle} = styles;

const Header = () => {
  const {firebaseAuthUserObj} = useSelector(state => state.user);
  const {uid, photoURL, email, displayName} = firebaseAuthUserObj || {};

  const {loading, onPressLogin} = useAuthentication();

  return (
    <View>
      {uid ? (
        <View style={containerstyle}>
          <Avatar
            rounded
            size="large"
            source={{uri: photoURL}}
            containerStyle={avatarStyle}
          />
          <View>
            <Text style={titleTextStyle}>{displayName}</Text>
            <Text numberOfLines={2} style={subTitleTextStyle}>
              {email}
            </Text>
          </View>
        </View>
      ) : (
        <Button
          type="outline"
          label="LOGIN WITH GOOGLE"
          onPress={onPressLogin}
          containerStyle={{padding: 15, backgroundColor: '#FFFFFF'}}
          loading={loading}
        />
      )}
    </View>
  );
};

export default Header;
