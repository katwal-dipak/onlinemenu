import React from 'react';

import {View, Text, FlatList, SafeAreaView, RefreshControl} from 'react-native';

import {MenuCard} from '../../components';

const Home = ({}) => {
  const keyExtractor = (item, index) => index.toString();

  const RenderItem = ({item}) => {
    return <MenuCard imageURL={''} />;
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <MenuCard />
    </View>
  );
};

export default Home;
