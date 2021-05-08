import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Button, Divider} from '../../components';
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
  const onPressCard = () => {
    navigation.navigate('menu_items');
  };

  const onPressAddMenuSection = () => {
    navigation.navigate('add_menu_section');
  };

  const onPressEditMenuSection = () => {
    navigation.navigate('edit_menu_section');
  };

  const keyExtractor = (item, index) => index.toString();

  const RenderItem = ({item}) => {
    const {title, data, active} = item || {};
    const itemsCount = data && Array.isArray(data) ? data.length : 0;

    return (
      <TouchableOpacity style={cardContainerStyle} onPress={onPressCard}>
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

  return (
    <SafeAreaView style={containerStyle}>
      <FlatList
        style={{
          flex: 1,
          margin: 10,
        }}
        showsVerticalScrollIndicator={false}
        data={data}
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

const data = [
  {id: 0, title: 'Breakfast', active: true, data: [1, 2, 3, 4, 5, 6]},
  {id: 1, title: 'Lunch', active: false, data: [1, 2, 3]},
  {id: 2, title: 'Dinner', active: true, data: [1, 2, 3, 4, 5]},
];
