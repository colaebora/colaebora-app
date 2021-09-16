import React, { FC, useCallback } from 'react';
import { View, Text, ViewStyle, TextStyle } from 'react-native';

import { Option } from '@ts/entities/Option';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { theme } from '@globals/styles/theme';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
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
  options?: Option[];
  onChange?: ((data: string) => void) | ((data: string[]) => void);
  value?: string | string[] | null;
  last?: boolean;
  multiple?: boolean;
  placeholder?: string;
  error?: string;
};

export const PickerField: FC<Props> = ({
  styles,
  label,
  required,
  options,
  last,
  onChange,
  value,
  multiple,
  placeholder,
  error,
}) => {
  const navigation = useNavigation();

  const openPicker = () => {
    navigation.navigate('Picker', {
      title: label,
      options,
      value,
      onChange,
      multiple,
    });
  };

  const getLabels = useCallback(() => {
    if (!options) return '';
    if (multiple === true) {
      const _value = value as string[];
      return _value.reduce(
        (acc: string, cur: string) =>
          `${acc}${acc && ','} ${options.find((o) => o.value === cur)?.label}`,
        ''
      );
    }
    const _value = value as string;
    return options.find((o) => o.value === _value)?.label;
  }, [multiple, options, value]);

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
          <Text>{getLabels()}</Text>
        )}
        <MaterialIcons
          name="arrow-forward-ios"
          size={16}
          color={theme.colors.primary}
        />
      </TouchableWithoutFeedback>
      {error && <Text style={styleSheet.error}>{error}</Text>}
    </View>
  );
};
