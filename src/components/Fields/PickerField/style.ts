import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontFamily: theme.fonts.title600,
    fontSize: 17,
    marginBottom: 12,
  },
  requiredMark: {
    fontFamily: theme.fonts.title600,
    fontSize: 18,
    marginBottom: 10,
    color: theme.colors.failureRed,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.lightGray,
    fontSize: 14,
  },
  placeholderText: {
    color: theme.colors.lightText,
  },
});
