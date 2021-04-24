import {StyleSheet} from 'react-native';

import {Components} from '../../styles/colors';
import {DEVICE} from '../../constants';

const CARD_WIDTH = DEVICE.width - 30;
const CARD_HEIGHT = CARD_WIDTH;

export const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: Components.Background.core,
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    marginTop: 10,
    borderRadius: 5,
    // elevation: 3,
  },
  imageStyle: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 5,
    backgroundColor: Components.Background.tint75Percent,
  },
});
