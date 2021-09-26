import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: getStatusBarHeight() + 60,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: '#fff',
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  editPhoto: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.primary,
    marginTop: 16,
    fontSize: 16,
  },
});
