import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {},
  listHeader: {
    height: 100,
    backgroundColor: '#fff',
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 1,
  },
  option: {
    backgroundColor: '#fff',
    width: '100%',
    paddingHorizontal: 18,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionLabel: {
    color: theme.colors.text,
    fontFamily: theme.fonts.text500,
  },
  separator: {
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 1,
    width: '95%',
    alignSelf: 'center',
  },
});
