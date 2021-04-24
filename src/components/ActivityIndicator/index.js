import React from 'react';
import {SafeAreaView} from 'react-native';
import LottieView from 'lottie-react-native';

const ActivityIndicator = () => (
  <SafeAreaView
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
    }}>
    <LottieView
      style={{
        height: 60,
        width: 60,
        alignSelf: 'center',
      }}
      source={require('../../../assets/lottie/loading.json')}
      autoPlay
      loop
      speed={1}
    />
  </SafeAreaView>
);

export default ActivityIndicator;
