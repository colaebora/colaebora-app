import { CSSProperties } from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  marker: {
    shadowOpacity: 0.08,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  markerContainer: {
    transform: [{ translateY: -23 }],
  },
});

export const webContainerStyle: CSSProperties = {
  flex: 1,
};
