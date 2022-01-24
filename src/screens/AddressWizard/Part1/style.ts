import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    flex: 1,
    marginTop: getStatusBarHeight() + 80,
  },
  searchField: {
    flexDirection: 'row',
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: theme.colors.lightGray,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  searchFieldIcon: {
    paddingVertical: 14,
  },
  searchFieldInput: {
    flex: 1,
    paddingVertical: 14,
    marginLeft: 10,
  },
  geoList: {
    flexGrow: 1,
    marginTop: 12,
  },
  geoListItem: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    borderBottomColor: theme.colors.lightGray,
    borderBottomWidth: 1,
    paddingHorizontal: 24,
    marginTop: 16,
  },
  geoListItemData: {
    flexDirection: 'column',
    marginLeft: 10,
    marginBottom: 16,
  },
  geoListItemPrimaryText: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.text,
  },
  geoListItemSecondaryText: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.lightText,
  },
});
