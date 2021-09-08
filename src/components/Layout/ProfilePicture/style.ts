import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  image: {
    width: 127,
    height: 127,
    borderRadius: 65,
    borderColor: theme.colors.primaryBgDark,
    borderWidth: 4,
  },
});
