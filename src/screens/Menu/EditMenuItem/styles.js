import {StyleSheet} from 'react-native';
import {Components} from '../../../styles/colors';

export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Components.Background.tint75Percent,
  },
  cardContainerStyle: {
    borderRadius: 3,
    padding: 15,
    margin: 10,
    backgroundColor: Components.Background.core,
  },
  buttonContainerStyle: {
    paddingHorizontal: 25,
    paddingTop: 15,
    borderTopColor: Components.Border,
    borderTopWidth: 1,
    backgroundColor: Components.Background.core,
  },
});
