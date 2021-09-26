import { LOWERCASE_ACTION_FREQUENCY_LABELS } from '@constants/actionFrequencies';
import { LOWERCASE_MONTHS } from '@constants/dates';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '@globals/styles/theme';
import { ActionDatetime } from '@ts/entities/Action';
import dayjs, { Dayjs } from 'dayjs';
import React, { FC, useCallback, useState } from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { ActionDatePickerModal } from './ActionDatePickerModal';
import { styles as styleSheet } from './style';

type Props = {
  styles?: {
    container: ViewStyle;
    label: TextStyle;
    requiredMark: TextStyle;
    input: TextStyle;
  };
  label?: string;
  required?: boolean;
  onChange?: (data: ActionDatetime) => void;
  value?: ActionDatetime | null;
  last?: boolean;
  placeholder?: string;
  error?: string;
};

export const ActionDatePicker: FC<Props> = ({
  styles,
  label,
  required,
  last,
  onChange,
  value,
  placeholder,
  error,
}) => {
  const [pickerOpen, setPickerOpen] = useState(false);

  const openPicker = useCallback(() => setPickerOpen(true), [setPickerOpen]);
  const closePicker = useCallback(() => setPickerOpen(false), [setPickerOpen]);

  const getLabel = useCallback(() => {
    if (!value) return '';
    const currentDate: Dayjs = dayjs(value.date);
    const month: string = LOWERCASE_MONTHS[currentDate.month()];
    const day: string = currentDate.date().toString().padStart(2, '0');
    const frequencyLabel: string =
      LOWERCASE_ACTION_FREQUENCY_LABELS[value.frequency];
    return `${day} de ${month}, ${frequencyLabel}`;
  }, [value]);

  return (
    <>
      <View
        style={[
          styleSheet.container,
          styles?.container,
          !last && !error ? { marginBottom: 12 } : {},
        ]}
      >
        {label && (
          <Text style={[styleSheet.label, styles?.label]}>
            {label}
            {required && (
              <Text style={[styleSheet.requiredMark, styles?.requiredMark]}>
                {' '}
                *
              </Text>
            )}
          </Text>
        )}
        <TouchableWithoutFeedback
          style={[
            styleSheet?.input,
            {
              borderBottomColor: error
                ? theme.colors.failureRed
                : theme.colors.lightGray,
            },
            styles?.input,
          ]}
          onPress={openPicker}
        >
          {!value ? (
            <Text style={styleSheet.placeholderText}>{placeholder}</Text>
          ) : (
            <Text>{getLabel()}</Text>
          )}
          <MaterialIcons
            name="arrow-forward-ios"
            size={16}
            color={theme.colors.primary}
          />
        </TouchableWithoutFeedback>
        {error && <Text style={styleSheet.error}>{error}</Text>}
      </View>
      <ActionDatePickerModal
        visible={pickerOpen}
        onClose={closePicker}
        onChange={onChange}
        value={value}
      />
    </>
  );
};
