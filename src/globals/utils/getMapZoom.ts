import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export function getMapZoom(zoom: number): {
  latitudeDelta: number;
  longitudeDelta: number;
} {
  const latitudeDelta = zoom;
  const longitudeDelta = latitudeDelta * (width / height);
  return {
    latitudeDelta,
    longitudeDelta,
  };
}
