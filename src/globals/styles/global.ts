import { StyleSheet } from 'react-native';
import { theme } from './theme';

export const globalStyles = StyleSheet.create({
  title: {
    fontFamily: theme.fonts.title600,
    fontSize: 18,
    marginVertical: 7,
    color: theme.colors.text,
  },
  text: {
    fontFamily: theme.fonts.text400,
    fontSize: 14,
    marginVertical: 3.5,
    color: theme.colors.text,
  },
});
