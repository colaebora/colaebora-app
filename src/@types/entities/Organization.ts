import { Interest } from '@ts/enums/Interest';
import { Address } from './Address';

export interface Organization {
  id: number;
  name: string;
  photo: string;
  bio?: string;
  email: string;
  phone: string;
  address: Address;
  interests: Interest[];
}
