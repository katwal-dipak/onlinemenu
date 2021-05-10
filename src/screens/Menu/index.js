import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Button, Divider, ActivityIndicator} from '../../components';
import useFetchMenu from '../../hooks/useFetchMenu';
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
  const {menu} = useSelector(state => state.menu);
  const {loading} = useFetchMenu();

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
