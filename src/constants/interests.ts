import { Option } from '@ts/entities/Option';
import { Interest } from '@ts/enums/Interest';

export const INTEREST_OPTIONS: Option[] = [
  { value: Interest.homeless, label: 'Moradores de rua' },
  { value: Interest.animals, label: 'Animais' },
  { value: Interest.elderly, label: 'Idosos' },
  { value: Interest.ecology, label: 'Ecologia' },
];
