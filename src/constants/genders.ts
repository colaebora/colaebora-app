import { Gender } from '@ts/enums/Gender';
import { Option } from '@ts/entities/Option';

export const GENDER_OPTIONS: Option[] = [
  { value: Gender.male, label: 'Masculino' },
  { value: Gender.female, label: 'Feminino' },
  { value: Gender.nonBinary, label: 'Não-binário' },
  { value: Gender.other, label: 'Outro' },
];
