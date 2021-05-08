import {StyleSheet} from 'react-native';

import {Components} from '../../styles/colors';
import {DEVICE} from '../../constants';
import {TextStyles} from '../../styles/text';

const CARD_WIDTH = DEVICE.width - 30;
const CARD_HEIGHT = CARD_WIDTH * 0.8;

export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: Components.Background.core,
  },
  cardContainerStyle: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    borderRadius: 3,
    alignSelf: 'center',
    marginVertical: 20,
    padding: 25,
    justifyContent: 'space-between',
  },
  buttonContainerStyle: {
    paddingHorizontal: 25,
    paddingTop: 15,
    borderTopColor: Components.Border,
    borderTopWidth: 1,
  },
  titleTextStyle: {
    ...TextStyles.H1SemiBold,
    fontSize: 25,
  },
  priceTextStyle: {
    ...TextStyles.H2SemiBold,
    fontSize: 22,
    marginTop: 15,
  },
});
