import { Gender } from '@ts/enums/Gender';
import { Interest } from '@ts/enums/Interest';
import { Address } from './Address';

export type User = {
  id: number;
  name: string;
  photo: string;
  bio?: string;
  email: string;
  phone: string;
  address: Address;
  gender: Gender;
  interests: Interest[];
};
