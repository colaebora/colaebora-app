import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primaryBg,
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  text: {
    color: theme.colors.primaryText,
    fontFamily: theme.fonts.text500,
    fontSize: 12,
  },
});
