import { TELEPHONE_NUMBER_MASK } from '@constants/masks';
import { theme } from '@globals/styles/theme';
import React, { FC } from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import MaskInput, { MaskInputProps } from 'react-native-mask-input';
import { styles as styleSheet } from './style';

type Props = Omit<MaskInputProps, 'onChange' | 'value'> & {
  styles?: {
    container: ViewStyle;
    label: TextStyle;
    requiredMark: TextStyle;
    input: TextStyle;
  };
  label?: string;
  required?: boolean;
  onChange?: (data: string) => void;
  value: string;
  last?: boolean;
  error?: string;
};

export const TelephoneInput: FC<Props> = ({
  styles,
  label,
  required,
  last,
  onChange,
  value,
  error,
  ...props
}) => (
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
    <MaskInput
      {...props}
      accessibilityComponentType=""
      accessibilityTraits=""
      onChangeText={(masked: string, unmasked: string) => {
        if (onChange) onChange(unmasked);
      }}
      value={value}
      mask={TELEPHONE_NUMBER_MASK}
      style={[
        styleSheet.input,
        {
          borderBottomColor: error
            ? theme.colors.failureRed
            : theme.colors.lightGray,
        },
        styles?.input,
      ]}
    />
    {error && <Text style={styleSheet.error}>{error}</Text>}
  </View>
);
