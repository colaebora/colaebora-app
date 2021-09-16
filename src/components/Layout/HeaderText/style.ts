import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  headerText: {
    position: 'absolute',
    top: getStatusBarHeight() + 25,
    fontSize: 20,
    color: theme.colors.text,
    left: 0,
    textAlign: 'center',
    width: '100%',
    fontFamily: theme.fonts.title600,
    zIndex: 2,
  },
});
