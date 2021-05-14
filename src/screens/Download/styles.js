import {StyleSheet} from 'react-native';
import {Components} from '../../styles/colors';
import {TextStyles} from '../../styles/text';

export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: Components.Background.core,
  },
  buttonContainerStyle: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderTopColor: Components.Border,
    borderTopWidth: 1,
  },
  profileURLContainerStyle: {
    backgroundColor: Components.Background.tint75Percent,
    padding: 10,
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleTextStyle: {
    ...TextStyles.H2SemiBold,
    fontSize: 16,
  },
  profileURLTextStyle: {
    ...TextStyles.H1Regular,
  },
});
