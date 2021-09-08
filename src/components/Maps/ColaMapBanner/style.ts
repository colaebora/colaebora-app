import { CSSProperties } from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 160,
    marginVertical: 12,
  },
  map: {
    flex: 1,
    borderRadius: 10,
  },
  card: {
    marginLeft: 8,
    marginTop: 10,
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
  },
});

export const webContainerStyle: CSSProperties = {
  flex: 1,
};
