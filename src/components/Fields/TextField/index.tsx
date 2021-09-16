import React, { FC } from 'react';
import {
  View,
  TextInputProps,
  TextInput,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { styles as styleSheet } from './style';

type Props = TextInputProps & {
  styles?: {
    container: ViewStyle;
    label: TextStyle;
    requiredMark: TextStyle;
    input: TextStyle;
  };
  label?: string;
  required?: boolean;
  last?: boolean;
};

export const TextField: FC<Props> = ({
  styles,
  label,
  required,
  last,
  ...props
}) => (
  <View
    style={[
      styleSheet.container,
      styles?.container,
      !last ? { marginBottom: 20 } : {},
    ]}
  >
    {label && (
      <Text style={[styleSheet.label, styles?.label]}>
        {label}
        {required && (
          <Text style={[styleSheet.requiredMark, styles?.requiredMark]}>*</Text>
        )}
      </Text>
    )}
    <TextInput {...props} style={[styleSheet.input, styles?.input]} />
  </View>
);
