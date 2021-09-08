import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  outerContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 10,
  },
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  footer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingHorizontal: 28,
    paddingVertical: 28,
    flex: 1,
  },
  footerText: {
    fontFamily: theme.fonts.title600,
    color: theme.colors.lightText,
    fontSize: 13,
    marginBottom: 10,
  },
});
