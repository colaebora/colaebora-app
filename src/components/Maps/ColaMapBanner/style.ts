import { theme } from '@globals/styles/theme';
import { CSSProperties } from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 160,
    marginVertical: 12,
  },
  map: {
    flex: 1,
    borderRadius: 10,
  },
  card: {
    position: 'absolute',
    left: 8,
    top: 10,
    width: '80%',
    backgroundColor: '#fff',
    padding: 6,
    shadowOpacity: 0.1,
    shadowRadius: 16,
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    zIndex: 2,
  },
  cardText: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.text,
    fontSize: 14,
    marginHorizontal: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const webContainerStyle: CSSProperties = {
  flex: 1,
};
