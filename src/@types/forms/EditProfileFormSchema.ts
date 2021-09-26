import { Gender } from '@ts/enums/Gender';

export type EditProfileFormSchema = {
  bio: string;
  location: string;
  interests: string[];
  email: string;
  phone: string;
  gender: Gender | null;
};
