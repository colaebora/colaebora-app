import { Option } from '@ts/entities/Option';
import { ActionFrequency } from '@ts/enums/ActionFrequency';

export const ACTION_FREQUENCIES: ActionFrequency[] = [
  ActionFrequency.once,
  ActionFrequency.sevenDays,
  ActionFrequency.fifteenDays,
  ActionFrequency.thirtyDays,
];

export const ACTION_FREQUENCY_LABELS: Record<ActionFrequency, string> = {
  [ActionFrequency.once]: 'Apenas uma vez',
  [ActionFrequency.sevenDays]: 'A cada 7 dias',
  [ActionFrequency.fifteenDays]: 'A cada 15 dias',
  [ActionFrequency.thirtyDays]: 'A cada 30 dias',
};

export const LOWERCASE_ACTION_FREQUENCY_LABELS: Record<
  ActionFrequency,
  string
> = {
  [ActionFrequency.once]: 'apenas uma vez',
  [ActionFrequency.sevenDays]: 'a cada 7 dias',
  [ActionFrequency.fifteenDays]: 'a cada 15 dias',
  [ActionFrequency.thirtyDays]: 'a cada 30 dias',
};

export const ACTION_FREQUENCY_OPTIONS: Option[] = [
  {
    label: ACTION_FREQUENCY_LABELS[ActionFrequency.once],
    value: ActionFrequency.once,
  },
  {
    label: ACTION_FREQUENCY_LABELS[ActionFrequency.sevenDays],
    value: ActionFrequency.sevenDays,
  },
  {
    label: ACTION_FREQUENCY_LABELS[ActionFrequency.fifteenDays],
    value: ActionFrequency.fifteenDays,
  },
  {
    label: ACTION_FREQUENCY_LABELS[ActionFrequency.thirtyDays],
    value: ActionFrequency.thirtyDays,
  },
];
