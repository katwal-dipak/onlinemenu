import React from 'react';

import {View, Text, FlatList, SafeAreaView, RefreshControl} from 'react-native';

import {PostsData} from './PostsData';

const Home = ({}) => {
  const keyExtractor = (item, index) => index.toString();

  const RenderItem = ({item}) => {
    return (
      <View style={{padding: 10, margin: 10}}>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <FlatList
      style={{flex: 1}}
      showsVerticalScrollIndicator={false}
      data={PostsData}
      renderItem={RenderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default Home;
