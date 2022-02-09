import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  name: {
    fontFamily: theme.fonts.text500,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 22,
    marginTop: getStatusBarHeight() + 70,
  },
  actionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pendingUserContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 8,
    paddingRight: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  actionNameText: {
    fontFamily: theme.fonts.text400,
    fontSize: 11,
  },
  actionName: {
    fontFamily: theme.fonts.title600,
    fontSize: 12,
  },
});
