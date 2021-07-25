import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    backgroundColor: '#fff',
    shadowOpacity: 0.1,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    padding: 16,
    position: 'absolute',
    zIndex: 10,
  },
  text: {
    fontFamily: theme.fonts.text400,
    fontSize: 14,
    color: theme.colors.lightText,
  },
});
