import {StyleSheet} from 'react-native';

import {Components} from '../../../styles/colors';
import {TextStyles} from '../../../styles/text';

export const styles = StyleSheet.create({
  containerstyle: {
    backgroundColor: Components.Background.core,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleTextStyle: {
    ...TextStyles.H1SemiBold,
    fontSize: 18,
    marginHorizontal: 10,
  },
  subTitleTextStyle: {
    ...TextStyles.H2Regular,
    fontSize: 14,
    marginHorizontal: 10,
  },
  avatarStyle: {
    backgroundColor: Components.Background.tint75Percent,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Components.Border,
  },
});
