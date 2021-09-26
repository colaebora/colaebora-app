import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  checkbox: {
    height: 19,
    width: 19,
    padding: 2,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: theme.colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    borderRadius: 100,
    backgroundColor: theme.colors.primary,
    width: '100%',
    height: '100%',
  },
  label: {
    fontFamily: theme.fonts.text400,
    marginLeft: 10,
  },
});
