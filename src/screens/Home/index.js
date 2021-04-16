import React from 'react';

import {View, Text, FlatList, SafeAreaView, RefreshControl} from 'react-native';

import {PostsData} from './PostsData';
import {MenuCard} from '../../components';

const Home = ({navigation}) => {
  const keyExtractor = (item, index) => index.toString();

  const RenderItem = ({item}) => {
    return (
      <MenuCard
        imageURL={item.imageURL}
        onPress={() => {
          navigation.navigate('details');
        }}
      />
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF', alignItems: 'center'}}>
      <FlatList
        style={{flex: 1, marginTop: 10}}
        showsVerticalScrollIndicator={false}
        data={PostsData}
        renderItem={RenderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default Home;
