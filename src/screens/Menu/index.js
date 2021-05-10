import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator, Button, Divider} from '../../components';
import useFetchMenu from '../../hooks/useFetchMenu';
import {setSelectedMenuSectionIndex} from '../../store/actions/menu';
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
  const {loading} = useFetchMenu();

  const onPressCard = index => {
    navigation.navigate('menu_items');

    dispatch(setSelectedMenuSectionIndex(index));
  };

  const onPressAddMenuSection = () => {
    navigation.navigate('add_menu_section');
  };

  const onPressEditMenuSection = () => {
    navigation.navigate('edit_menu_section');
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
          <TouchableOpacity onPress={onPressEditMenuSection}>
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
        <Button label="ADD NEW SECTION" onPress={onPressAddMenuSection} />
      </View>
    </SafeAreaView>
  );
};

export default Menu;
