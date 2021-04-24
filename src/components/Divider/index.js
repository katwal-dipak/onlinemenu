import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Components} from '../../styles/colors';

const Divider = () => (
  <View
    style={{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      height: StyleSheet.hairlineWidth,
      backgroundColor: Components.Border,
    }}
  />
);

export default Divider;
