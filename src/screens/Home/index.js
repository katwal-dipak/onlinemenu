import React, {useLayoutEffect} from 'react';
import {FlatList, RefreshControl, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ActivityIndicator, MenuCard} from '../../components';
import useFetchTemplates from '../../hooks/useFetchTemplates';
import {Components} from '../../styles/colors';

const Home = ({navigation}) => {
  const {
    templates,
    loading,
    refreshing,
    paginating,
    error,
    onRefresh,
    onRetry,
    onEndReached,
  } = useFetchTemplates();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('settings');
          }}>
          <Ionicons
            name="person-circle-outline"
            size={30}
            color={Components.Button}
            style={{paddingHorizontal: 10}}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  const keyExtractor = (item, index) => index.toString();

  const RenderItem = ({item}) => {
    const {imageURL} = item || {};

    return (
      <MenuCard
        imageURL={imageURL}
        onPress={() => {
          navigation.navigate('details');
        }}
      />
    );
  };

  const RenderFooter = () => {
    if (paginating) {
      return <ActivityIndicator />;
    }

    return <View />;
  };

  return loading ? (
    <ActivityIndicator />
  ) : (
    <View style={{flex: 1, backgroundColor: '#FFFFFF', alignItems: 'center'}}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={{flex: 1, marginBottom: 10}}
        showsVerticalScrollIndicator={false}
        data={templates || []}
        renderItem={RenderItem}
        keyExtractor={keyExtractor}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.01}
        ListFooterComponent={RenderFooter}
      />
    </View>
  );
};

export default Home;
