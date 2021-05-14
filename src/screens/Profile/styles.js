import {StyleSheet} from 'react-native';

import {Components} from '../../styles/colors';
import {TextStyles} from '../../styles/text';

export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  formContainerStyle: {
    flex: 1,
  },
  cardContainerStyle: {
    borderRadius: 3,
    padding: 15,
    margin: 10,
    backgroundColor: Components.Background.core,
  },
  buttonContainerStyle: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderTopColor: Components.Border,
    borderTopWidth: 1,
  },
  titleTextStyle: {
    ...TextStyles.H1SemiBold,
    marginTop: 10,
    marginHorizontal: 10,
    fontSize: 20,
  },
});
