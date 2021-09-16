import { Option } from '@ts/entities/Option';

export type PickerScreenProps = {
  options: Option[];
  title?: string;
  value: string[] | string;
  onChange?: (v: string[] | string, o?: string) => void;
  multiple?: boolean;
};
