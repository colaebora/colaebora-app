import { LatLng } from './LatLng';

export type Address = {
  street: string;
  number: string;
  city: string;
  state: string;
  latLng: LatLng;
};
