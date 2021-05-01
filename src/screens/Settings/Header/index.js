import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button} from '../../../components';
import useAuthentication from '../../../hooks/useAuthentication';

import {styles} from './styles';
import {Components} from '../../../styles/colors';

const {titleTextStyle, subTitleTextStyle, containerstyle, avatarStyle} = styles;

const Header = ({navigation}) => {
  const {firebaseAuthUserObj} = useSelector(state => state.user);
  const {uid, photoURL, email, displayName} = firebaseAuthUserObj || {};

  const {loading, onPressLogin} = useAuthentication();

  const onPressProfile = () => {
    navigation.navigate('profile');
  };

  return (
    <View>
      {uid ? (
        <TouchableHighlight
          underlayColor="transparent"
          onPress={onPressProfile}>
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
            <Ionicons
              name="chevron-forward"
              size={20}
              color={Components.Border}
              style={{marginHorizontal: 10}}
            />
          </View>
        </TouchableHighlight>
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
