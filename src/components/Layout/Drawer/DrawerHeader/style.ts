import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primaryBg,
    height: 130,
    padding: 21,
    paddingTop: getStatusBarHeight() + 21,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 25,
    height: 50,
    width: 50,
  },
  textsContainer: {
    flexDirection: 'column',
    marginLeft: 16,
  },
  username: {
    fontFamily: theme.fonts.title600,
    color: theme.colors.text,
    marginBottom: 8,
  },
  editProfile: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.primaryText,
    fontSize: 13,
  },
  avatarPlaceholder: {
    borderRadius: 30,
    height: 60,
    width: 60,
    backgroundColor: theme.colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
