import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    flexDirection: 'column',
    minHeight: 180,
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
    maxHeight: 40,
  },
  optionsContainer: {
    marginTop: 10,
    maxHeight: 80,
  },
  cancelButton: {
    borderWidth: 2,
    borderColor: theme.colors.failureRed,
    paddingVertical: 6,
    borderRadius: 8,
    width: 150,
    marginRight: 10,
    justifyContent: 'center',
  },
  cancelButtonText: {
    textAlign: 'center',
    color: theme.colors.failureRed,
    fontFamily: theme.fonts.text500,
  },
  editButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 8,
    borderRadius: 8,
    width: 150,
    justifyContent: 'center',
  },
  editButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: theme.fonts.text500,
  },
  pauseButton: {
    marginTop: 8,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    paddingVertical: 6,
    borderRadius: 8,
    width: '100%',
    justifyContent: 'center',
  },
  pauseButtonText: {
    textAlign: 'center',
    color: theme.colors.primary,
    fontFamily: theme.fonts.text500,
  },
  canceledBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  canceledBadgeText: {
    marginLeft: 8,
    fontSize: 12,
    fontFamily: theme.fonts.title600,
  },
  canceledBadgeReason: {
    marginLeft: 8,
    fontSize: 12,
    fontFamily: theme.fonts.text400,
  },
});
