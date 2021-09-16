import { Gender } from '@ts/enums/Gender';
import { Interest } from '@ts/enums/Interest';

export type User = {
  id: number;
  name: string;
  photo: string;
  bio?: string;
  email: string;
  phone: string;
  gender: Gender;
  interests: Interest[];
};
