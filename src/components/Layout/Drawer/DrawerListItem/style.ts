import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 28,
  },
  title: {
    color: theme.colors.text,
    fontFamily: theme.fonts.title600,
    marginLeft: 16,
  },
});
