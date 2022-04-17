import { Action } from '@ts/entities/Action';
import { RegisterVolunteerSchema } from '@ts/forms/RegisterVolumeSchema';
import { ActionFormProps } from './ActionForm';
import { PickerScreenProps } from './Picker';

export type AppRoutesParamList = {
  Home: undefined;
  RegisterScreen: RegisterVolunteerSchema;
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
