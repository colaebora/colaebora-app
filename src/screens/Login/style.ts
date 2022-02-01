import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    flexDirection: 'column-reverse',
  },
  loginBgTexture: {
    position: 'absolute',
    top: 0,
    left: 0,
    color: '#fff',
    backgroundColor: theme.colors.primaryBg,
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
  logoContainer: {
    flex: 1,
    paddingTop: 80,
    paddingLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: theme.colors.primaryBg,
    shadowOpacity: 1,
    shadowRadius: 80,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
});
