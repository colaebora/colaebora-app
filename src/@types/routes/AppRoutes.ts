import { Action } from '@ts/entities/Action';
import { ActionFormProps } from './ActionForm';
import { PickerScreenProps } from './Picker';

export type AppRoutesParamList = {
  Home: undefined;
  Picker: PickerScreenProps;
  Organization: undefined;
  Action: { action: Action };
  EditProfile: undefined;
  MyActions: undefined;
  PendingApprovals: undefined;
  ActionForm: ActionFormProps;

  AddressWizardPartOne: undefined;
  AddressWizardPartTwo: undefined;
  AddressWizardPartThree: undefined;
};
