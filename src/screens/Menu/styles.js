import {StyleSheet} from 'react-native';

import {Components, Theme} from '../../styles/colors';
import {TextStyles} from '../../styles/text';

export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: Components.Background.tint75Percent,
  },
  cardContainerStyle: {
    borderRadius: 3,
    padding: 15,
    marginBottom: 10,
    backgroundColor: Components.Background.core,
  },
  buttonContainerStyle: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderTopColor: Components.Border,
    borderTopWidth: 1,
    backgroundColor: Components.Background.core,
  },
  titleTextStyle: {
    ...TextStyles.H1SemiBold,
    fontSize: 25,
    marginVertical: 10,
  },
  activeStatusTextStyle: {
    ...TextStyles.H2Regular,
    color: Theme.SecondaryColor,
  },
  inActiveStatusTextStyle: {
    ...TextStyles.H2Regular,
    color: Components.Text.H3,
  },
  itemsCountTextStyle: {
    ...TextStyles.H1Regular,
  },
  editButtonTextStyle: {
    ...TextStyles.H1SemiBold,
  },
  borderStyle: {
    color: Components.Border,
  },
});
