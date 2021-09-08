import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    flexDirection: 'column-reverse',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  loginSheet: {
    height: 171,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 35,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowOpacity: 0.1,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  googleLogin: {
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 15,
    height: 56,
    marginBottom: 18,
  },
  googleLoginText: {
    fontFamily: theme.fonts.title600,
    color: 'white',
    fontSize: 16,
    marginLeft: 8,
  },
  skipLogin: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipLoginText: {
    color: theme.colors.primary,
    fontSize: 16,
    fontFamily: theme.fonts.title600,
    marginLeft: 8,
  },
});
