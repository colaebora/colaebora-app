import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';

export const styleSheet = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 15,
    height: 56,
    marginBottom: 18,
  },
  text: {
    fontFamily: theme.fonts.title600,
    color: 'white',
    fontSize: 16,
    marginLeft: 8,
  },
});
