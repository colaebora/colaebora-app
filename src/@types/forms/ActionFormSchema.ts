import { ActionDatetime } from '@ts/entities/Action';
import { Address } from '@ts/entities/Address';
import { Interest } from '@ts/enums/Interest';

export type ActionFormSchema = {
  id?: string;
  name: string;
  about: string;
  categories: Interest[];
  location: Address;
  date: ActionDatetime | null;
  volunteersNeededCount: number;
  initialImgUrl?: string;
  newImgUri?: string;
};
