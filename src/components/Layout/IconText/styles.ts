import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.text,
    fontSize: 14,
    marginHorizontal: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
