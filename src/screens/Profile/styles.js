import {StyleSheet} from 'react-native';

import {Components} from '../../styles/colors';

export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: Components.Background.core,
    padding: 15,
  },
  buttonContainerStyle: {
    paddingHorizontal: 25,
    paddingTop: 15,
    borderTopColor: Components.Border,
    borderTopWidth: 1,
  },
});
