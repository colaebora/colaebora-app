import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.colors.lightGray,
    borderRadius: 5,
    paddingHorizontal: 20,
    height: 48,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  input: {
    fontFamily: theme.fonts.text400,
    fontSize: 14,
    color: theme.colors.text,
    flex: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.lightText,
  },
});
