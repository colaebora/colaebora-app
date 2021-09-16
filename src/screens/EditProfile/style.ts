import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 280,
    backgroundColor: theme.colors.primaryBgMiddle,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 65,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: '#fff',
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  editPhoto: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.primary,
    marginTop: 16,
    fontSize: 16,
  },
});
