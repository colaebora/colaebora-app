import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    height: 200,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowOpacity: 0.1,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  actionImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  actionName: {
    fontFamily: theme.fonts.title600,
    color: theme.colors.text,
    fontSize: 16,
    marginBottom: 4,
  },
  distance: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.text,
    fontSize: 14,
    marginLeft: 4,
  },
  userCount: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.text,
    fontSize: 14,
    marginLeft: 5,
  },
  column: {
    flexDirection: 'column',
    flex: 1,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  categories: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
  },
});
