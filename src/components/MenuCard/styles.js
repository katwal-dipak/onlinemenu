import {StyleSheet} from 'react-native';

import {Components} from '../../styles/colors';
import {DEVICE} from '../../constants';

const CARD_WIDTH = DEVICE.width - 30;
const CARD_HEIGHT = CARD_WIDTH * 0.6;

export const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: Components.Background.core,
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    borderRadius: 5,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    backgroundColor: Components.Background.tint75Percent,
  },
});
