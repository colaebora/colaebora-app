import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  outerContainer: {
    height: 100,
    backgroundColor: 'blue',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 27,
  },
  title: {
    fontFamily: theme.fonts.title600,
    color: theme.colors.text,
    marginBottom: 10,
    fontSize: 16,
    alignSelf: 'center',
  },
  date: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: theme.colors.lightGray,
    borderBottomWidth: 1,
  },
  dateLabel: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.lightText,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  finishButton: {
    padding: 15,
  },
  cancelText: {
    fontFamily: theme.fonts.title600,
    fontSize: 17,
    color: theme.colors.lightText,
  },
  finishText: {
    fontFamily: theme.fonts.title600,
    fontSize: 17,

    color: theme.colors.primary,
  },
});
