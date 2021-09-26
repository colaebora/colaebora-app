import { ActionFrequency } from '@ts/enums/ActionFrequency';
import { Interest } from '@ts/enums/Interest';
import { Address } from './Address';

export type ActionDatetime = {
  date: string;
  frequency: ActionFrequency;
};

export type Action = {
  id: string;
  name: string;
  about: string;
  categories: Interest[];
  location: Address | null;
  date: ActionDatetime | null;
  phone: string;
  document: string;
};
