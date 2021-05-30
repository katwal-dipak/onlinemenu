import React, {useLayoutEffect, useState, useEffect} from 'react';
import {
  FlatList,
  RefreshControl,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ActivityIndicator, MenuCard} from '../../components';
import useFetchTemplates from '../../hooks/useFetchTemplates';
import {Components} from '../../styles/colors';
import Details from '../Details';
import SplashScreen from 'react-native-splash-screen';

const Home = ({navigation}) => {
  const [isDetailsVisible, setDetailsVisibility] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

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

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('settings');
          }}>
          <Ionicons
            name="person-outline"
            size={25}
            color={Components.Button}
            style={{paddingHorizontal: 10}}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  const toggleDetailsView = () => {
    setDetailsVisibility(!isDetailsVisible);
  };

  const keyExtractor = (item, index) => index.toString();

  const RenderItem = ({item}) => {
    const {imageURL} = item || {};

    return (
      <View style={{alignSelf: 'center', marginBottom: 15}}>
        <MenuCard
          imageURL={imageURL}
          onPress={() => {
            toggleDetailsView(), setSelectedItem(item);
          }}
        />
      </View>
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
    <View style={{flex: 1, backgroundColor: Components.Background.core}}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={{
          flex: 1,
          marginVertical: 20,
        }}
        showsVerticalScrollIndicator={false}
        data={templates || []}
        renderItem={RenderItem}
        keyExtractor={keyExtractor}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.01}
        ListFooterComponent={RenderFooter}
      />
      <Details
        item={selectedItem}
        visible={isDetailsVisible}
        toggle={toggleDetailsView}
        navigation={navigation}
      />
    </View>
  );
};

export default Home;
