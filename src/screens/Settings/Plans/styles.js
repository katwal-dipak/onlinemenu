import {StyleSheet} from 'react-native';

import {TextStyles} from '../../../styles/text';
import {DEVICE} from '../../../constants';

const CARD_WIDTH = DEVICE.width / 1.5;

export const styles = StyleSheet.create({
  titleTextStyle: {
    ...TextStyles.H1SemiBold,
    marginHorizontal: 20,
  },
  cardStyle: {
    width: CARD_WIDTH,
    height: CARD_WIDTH * 0.8,
  },
});
