import { ActionFormSchema } from '@ts/forms/ActionFormSchema';

export type ActionFormProps = {
  action: ActionFormSchema;
  onFinish: (data: ActionFormSchema) => Promise<void>;
};
