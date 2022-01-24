import React, { FC, useCallback, useEffect, useState } from 'react';
import { View, Text, ViewStyle, TextStyle } from 'react-native';

import { Option } from '@ts/entities/Option';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { theme } from '@globals/styles/theme';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Address } from '@ts/entities/Address';
import { FormikErrors } from 'formik';
import { EMPTY_ADDRESS } from '@hooks/useAddressWIzard';
import { styles as styleSheet } from './style';
import { AddressWizard } from '../AddressWizard';

type Props = {
  styles?: {
    container: ViewStyle;
    label: TextStyle;
    requiredMark: TextStyle;
    input: TextStyle;
  };
  label?: string;
  required?: boolean;
  onChange: (a: Address) => unknown;
  value: Address | null;
  last?: boolean;
  placeholder?: string;
  error?: FormikErrors<Address> | string;
};

export const AddressField: FC<Props> = ({
  styles,
  label,
  required,
  last,
  onChange,
  value,
  placeholder,
  error,
}) => {
  const [wizardOpen, setWizardOpen] = useState<boolean>(false);

  const openWizard = useCallback(() => {
    setWizardOpen(true);
  }, []);

  useEffect(() => {
    if (wizardOpen) setWizardOpen(false);
  }, [wizardOpen]);

  console.log({ value });

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
        onPress={openWizard}
      >
        {!value?.street ? (
          <Text style={styleSheet.placeholderText}>{placeholder}</Text>
        ) : (
          <Text>
            {value.street}, {value.number}
          </Text>
        )}
        <MaterialIcons
          name="arrow-forward-ios"
          size={16}
          color={theme.colors.primary}
        />
      </TouchableWithoutFeedback>
      {error && <Text style={styleSheet.error}>{error}</Text>}
      <AddressWizard
        visible={wizardOpen}
        value={value ?? EMPTY_ADDRESS}
        onChange={onChange}
      />
    </View>
  );
};
