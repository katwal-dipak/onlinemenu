import {StyleSheet} from 'react-native';

import {DEVICE} from '../../constants';
import {TextStyles} from '../../styles/text';
import {Components} from '../../styles/colors';

const CARD_WIDTH = DEVICE.width - 30;
const CARD_HEIGHT = CARD_WIDTH;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(60, 60, 60, 0.8)',
  },
  cardContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: 'white',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    //  alignItems: 'stretch',
    //  padding: 15,
    borderRadius: 5,
  },
  titleTextStyle: {
    ...TextStyles.H1SemiBold,
    fontSize: 25,
    textAlign: 'center',
  },
  messageTextStyle: {
    ...TextStyles.H1SemiBold,
    textAlign: 'center',
  },
  imageStyle: {
    width: '100%',
    height: '60%',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: Components.Background.tint75Percent,
  },
});
