import { Address } from '@ts/entities/Address';
import { Gender } from '@ts/enums/Gender';

export type EditProfileFormSchema = {
  bio: string;
  address: Address;
  interests: string[];
  email: string;
  phone: string;
  gender: Gender | null;
};
