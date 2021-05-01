import {StyleSheet} from 'react-native';

import {Components} from '../../styles/colors';
import {TextStyles} from '../../styles/text';

export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: Components.Background.core,
  },
  cardStyle: {},
  titleTextStyle: {
    ...TextStyles.H1SemiBold,
    paddingHorizontal: 10,
    color: Components.Button,
  },
});
