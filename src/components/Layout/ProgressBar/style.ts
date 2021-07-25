import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.lightGray,
    height: 11,
    borderRadius: 10,
    flex: 1,
  },
  filled: {
    backgroundColor: theme.colors.primary,
    height: 11,
    borderRadius: 10,
  },
});
