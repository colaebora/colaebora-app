import { ActionFormProps } from './ActionForm';
import { PickerScreenProps } from './Picker';

export type AppRoutesParamList = {
  Home: undefined;
  Picker: PickerScreenProps;
  Organization: undefined;
  Action: undefined;
  EditProfile: undefined;
  ActionForm: ActionFormProps;

  AddressWizardPartOne: undefined;
  AddressWizardPartTwo: undefined;
  AddressWizardPartThree: undefined;
};
