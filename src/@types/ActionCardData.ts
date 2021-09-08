import { ActionCategory } from './ActionCategory';

export interface ActionCardData {
  id: string;
  imgUrl: string;
  name: string;
  distanceInKm: number;
  volunteersNeeded: number;
  volunteersAssigned: number;
  categories: ActionCategory[];
}
