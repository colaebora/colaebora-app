import { Action } from '@ts/entities/Action';
import { ActionFormSchema } from '@ts/forms/ActionFormSchema';

export type ActionFormProps = {
  action: Action;
  onFinish: (data: ActionFormSchema) => Promise<void>;
};
