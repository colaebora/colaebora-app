import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  bottomMenu: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    flexDirection: 'column',
    padding: 22,
  },
  bottomMenuDrawer: {
    alignSelf: 'center',
    backgroundColor: theme.colors.lightGray,
    borderRadius: 25,
    height: 4,
    width: 44,
    marginTop: 15,
  },
  actionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  actionsTitle: {
    color: theme.colors.text,
    fontSize: 18,
    fontFamily: theme.fonts.title600,
  },
  actionsLink: {
    color: theme.colors.primary,
    fontSize: 14,
    fontFamily: theme.fonts.title600,
  },
});
