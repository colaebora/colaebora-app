import { ActionFormProps } from './ActionForm';
import { PickerScreenProps } from './Picker';

export type AppRoutesParamList = {
  Home: undefined;
  Picker: PickerScreenProps;
  Action: undefined;
  EditProfile: undefined;
  ActionForm: ActionFormProps;

  AddressWizardPartOne: undefined;
  AddressWizardPartTwo: undefined;
  AddressWizardPartThree: undefined;
};
