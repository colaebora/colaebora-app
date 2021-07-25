import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  mapContainer: {
    flex: 1,
    backgroundColor: theme.colors.gray,
  },
  bottomMenu: {
    width: '100%',
    height: 350,
    backgroundColor: '#fff',
    flexDirection: 'column',
    padding: 22,
    paddingTop: 42,
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
