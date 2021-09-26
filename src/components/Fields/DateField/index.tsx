import React, { FC, useCallback, useState } from 'react';
import { View, Text, ViewStyle, TextStyle } from 'react-native';

import { Feather } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { theme } from '@globals/styles/theme';
import dayjs, { Dayjs } from 'dayjs';
import { DAYS_OF_THE_WEEK, LOWERCASE_MONTHS } from '@constants/dates';
import { APP_LOCALE } from '@constants/settings';
import { styles as styleSheet } from './style';

type Props = {
  styles?: {
    container?: ViewStyle;
    label?: TextStyle;
    requiredMark?: TextStyle;
    input?: TextStyle;
  };
  label?: string;
  required?: boolean;
  onChange?: (data: string) => void;
  value?: string | null;
  last?: boolean;
  placeholder?: string;
  error?: string;
};

export const DateField: FC<Props> = ({
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
    const currentDate: Dayjs = dayjs(value);
    const weekDay: string = DAYS_OF_THE_WEEK[currentDate.day()];
    const month: string = LOWERCASE_MONTHS[currentDate.month()];
    const day: string = currentDate.date().toString().padStart(2, '0');
    const year: string = currentDate.year().toString();
    return `${weekDay}, ${day} de ${month} de ${year}`;
  }, [value]);

  return (
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
        {!value || value.length === 0 ? (
          <Text style={styleSheet.placeholderText}>{placeholder}</Text>
        ) : (
          <Text>{getLabel()}</Text>
        )}
        <Feather name="calendar" size={16} color={theme.colors.primary} />
      </TouchableWithoutFeedback>
      {error && <Text style={styleSheet.error}>{error}</Text>}
      <DateTimePickerModal
        isVisible={pickerOpen}
        mode="date"
        isDarkModeEnabled={false}
        textColor="#000"
        minimumDate={dayjs().toDate()}
        maximumDate={dayjs().add(6, 'month').toDate()}
        confirmTextIOS="Confirmar"
        cancelTextIOS="Cancelar"
        onConfirm={(date: Date) => {
          if (onChange) onChange(date.toString());
          closePicker();
        }}
        onCancel={closePicker}
        locale={APP_LOCALE}
      />
    </View>
  );
};
