import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Surface} from 'react-native-paper';
import {Button, Divider} from '../../components';
import {styles} from './styles';

const {
  containerStyle,
  cardContainerStyle,
  buttonContainerStyle,
  titleTextStyle,
  statusTextStyle,
  itemsCountTextStyle,
  editButtonTextStyle,
  borderStyle,
} = styles;

const Menu = ({navigation}) => {
  const keyExtractor = (item, index) => index.toString();

  const RenderItem = ({title, price, active}) => {
    return (
      <TouchableOpacity style={cardContainerStyle}>
        <Text style={statusTextStyle}>Active</Text>

        <Text style={titleTextStyle}>Breakfast</Text>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <Text style={itemsCountTextStyle}>4 Items</Text>
          <Text style={borderStyle}>|</Text>
          <Text style={editButtonTextStyle}>EDIT</Text>
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
        data={[{id: 1}, {id: 2}, {id: 3}]}
        renderItem={RenderItem}
        keyExtractor={keyExtractor}
      />
      <View style={buttonContainerStyle}>
        <Button label="ADD NEW SECTION" />
      </View>
    </SafeAreaView>
  );
};

export default Menu;
