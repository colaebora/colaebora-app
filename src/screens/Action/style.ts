import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: theme.colors.primaryBgMiddle,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: getStatusBarHeight() + 32,
    paddingHorizontal: 36,
  },
  profilePicture: {
    alignSelf: 'center',
  },
  name: {
    fontFamily: theme.fonts.title600,
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 22,
  },
  actionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  assigneeCount: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.primaryText,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  joinButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    marginBottom: 16,
    borderRadius: 8,
  },
  joinButtonText: {
    fontFamily: theme.fonts.text500,
    color: '#fff',
    textAlign: 'center',
  },
  actionInfo: {
    marginTop: 12,
  },
  actionInfoDivider: {
    marginVertical: 18,
  },
});
