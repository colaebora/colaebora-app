import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  outerContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    bottom: 0,
    zIndex: 10,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    width: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    backgroundColor: theme.colors.primaryBg,
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 22,
    paddingHorizontal: 22,
  },
  body: {
    backgroundColor: '#fff',
    paddingHorizontal: 22,
    paddingTop: 10,
    paddingBottom: 28,
  },
});
