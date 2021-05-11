import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Button, Divider} from '../../../components';
import {styles} from './styles';
import {setSelectedMenuItemIndex} from '../../../store/actions/menu';

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

const MenuItems = ({navigation}) => {
  const dispatch = useDispatch();
  const {menu, selectedMenuSectionIndex} = useSelector(state => state.menu);
  const {data} =
    menu && Array.isArray(menu) ? menu[selectedMenuSectionIndex] : {};

  const onPressAddNewItem = () => {
    navigation.navigate('add_menu_item');
  };

  const keyExtractor = (item, index) => index.toString();

  const onPressEditMenuItem = (index, item) => {
    navigation.navigate('edit_menu_item', {item});

    dispatch(setSelectedMenuItemIndex(index));
  };

  const RenderItem = ({item, index}) => {
    const {title, description, active, price} = item || {};

    return (
      <View style={cardContainerStyle}>
        <Text style={active ? activeStatusTextStyle : inActiveStatusTextStyle}>
          {active ? 'Active' : 'Hidden'}
        </Text>
        <View style={{marginVertical: 15}}>
          <Text style={titleTextStyle}>{title}</Text>
          <Text style={itemsCountTextStyle}>{description}</Text>
        </View>

        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <Text style={itemsCountTextStyle}>{price}</Text>
          <Text style={borderStyle}>|</Text>
          <TouchableOpacity onPress={() => onPressEditMenuItem(index, item)}>
            <Text style={editButtonTextStyle}>EDIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={containerStyle}>
      <FlatList
        style={{
          flex: 1,
          margin: 10,
        }}
        showsVerticalScrollIndicator={false}
        data={data || []}
        renderItem={RenderItem}
        keyExtractor={keyExtractor}
      />
      <View style={buttonContainerStyle}>
        <Button label="ADD NEW ITEM" onPress={onPressAddNewItem} />
      </View>
    </SafeAreaView>
  );
};

export default MenuItems;
