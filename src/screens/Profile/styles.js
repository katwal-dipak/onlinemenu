import {StyleSheet} from 'react-native';

import {Components} from '../../styles/colors';
import {TextStyles} from '../../styles/text';

export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: Components.Background.core,
  },
  formContainerStyle: {
    flex: 1,
    //  backgroundColor: Components.Background.core,
    padding: 15,
  },
  buttonContainerStyle: {
    paddingHorizontal: 25,
    paddingTop: 15,
    borderTopColor: Components.Border,
    borderTopWidth: 1,
  },
  titleTextStyle: {
    ...TextStyles.H1SemiBold,
    marginTop: 30,
    fontSize: 20,
  },
});
