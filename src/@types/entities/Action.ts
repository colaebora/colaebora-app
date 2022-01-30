import { ActionFrequency } from '@ts/enums/ActionFrequency';
import { Interest } from '@ts/enums/Interest';
import { Address } from './Address';
import { Organization } from './Organization';

export type ActionDatetime = {
  date: string;
  frequency: ActionFrequency;
};

export type Action = {
  id: string;
  imgUrl: string;
  name: string;
  about: string;
  categories: Interest[];
  location: Address;
  date: ActionDatetime | null;
  volunteersAssignedCount: number;
  volunteersNeededCount: number;
  distanceInMeters: number;
  organization: Partial<Organization>;
};
