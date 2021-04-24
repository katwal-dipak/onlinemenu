import React, {useLayoutEffect} from 'react';
import {
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ActivityIndicator, MenuCard} from '../../components';
import useFetchTemplates from '../../hooks/useFetchTemplates';

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
          <Text>Profile</Text>
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
