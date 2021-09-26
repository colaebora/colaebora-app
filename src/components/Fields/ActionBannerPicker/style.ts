import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: theme.colors.primaryText,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 100,
    marginBottom: 16,
    backgroundColor: theme.colors.primaryBg,
  },
  text: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.primaryText,
    marginLeft: 15,
  },
});
