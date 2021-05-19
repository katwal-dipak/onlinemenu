import React, {useLayoutEffect} from 'react';
import {
  FlatList,
  Linking,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator, Button, Divider} from '../../components';
import useFetchMenu from '../../hooks/useFetchMenu';
import {setSelectedMenuSectionIndex} from '../../store/actions/menu';
import {Components} from '../../styles/colors';
import {styles} from './styles';

const {
  containerStyle,
  cardContainerStyle,
  buttonContainerStyle,
  titleTextStyle,
  activeStatusTextStyle,
  inActiveStatusTextStyle,
  itemsCountTextStyle,
  editButtonTextStyle,
  borderStyle,
} = styles;

const Menu = ({navigation}) => {
  const dispatch = useDispatch();
  const {menu} = useSelector(state => state.menu);
  const {firebaseAuthUserObj} = useSelector(state => state.user);
  const {loading} = useFetchMenu();

  const {uid} = firebaseAuthUserObj || {};

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onPressPreviewButton}>
          <Ionicons
            name="expand-outline"
            size={25}
            color={Components.Button}
            style={{paddingHorizontal: 10}}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  const onPressPreviewButton = () => {
    const menuURL = `http://onlinemenu.today/menu/${uid}`;

    Linking.canOpenURL(menuURL).then(supported => {
      if (supported) {
        Linking.openURL(menuURL);
      }
    });
  };

  const onPressCard = index => {
    navigation.navigate('menu_items');

    dispatch(setSelectedMenuSectionIndex(index));
  };

  const onPressAddMenuSection = () => {
    navigation.navigate('add_menu_section');
  };

  const onPressEditMenuSection = (item, index) => {
    navigation.navigate('edit_menu_section', {item});

    dispatch(setSelectedMenuSectionIndex(index));
  };

  const keyExtractor = (item, index) => index.toString();

  const RenderItem = ({item, index}) => {
    const {title, data, active} = item || {};
    const itemsCount = data && Array.isArray(data) ? data.length : 0;

    return (
      <TouchableOpacity
        style={cardContainerStyle}
        onPress={() => {
          onPressCard(index);
        }}>
        <Text style={active ? activeStatusTextStyle : inActiveStatusTextStyle}>
          {active ? 'Active' : 'Hidden'}
        </Text>
        <Text style={titleTextStyle}>{title}</Text>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <Text style={itemsCountTextStyle}>{`${itemsCount} Items`}</Text>
          <Text style={borderStyle}>|</Text>
          <TouchableOpacity onPress={() => onPressEditMenuSection(item, index)}>
            <Text style={editButtonTextStyle}>EDIT</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return loading ? (
    <ActivityIndicator />
  ) : (
    <SafeAreaView style={containerStyle}>
      <FlatList
        style={{
          flex: 1,
          margin: 10,
        }}
        showsVerticalScrollIndicator={false}
        data={menu || []}
        renderItem={RenderItem}
        keyExtractor={keyExtractor}
      />
      <View style={buttonContainerStyle}>
        <Button label="ADD NEW CATEGORY" onPress={onPressAddMenuSection} />
      </View>
    </SafeAreaView>
  );
};

export default Menu;
