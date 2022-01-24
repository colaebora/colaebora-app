import React, { FC, useEffect } from 'react';
import { useAddressWizard } from '@hooks/useAddressWIzard';
import { useNavigation } from '@react-navigation/native';
import { Address } from '@ts/entities/Address';

type Props = {
  visible: boolean;
  value: Address;
  onChange: (a: Address) => unknown;
};

export const AddressWizard: FC<Props> = ({ visible, onChange, value }) => {
  const navigation = useNavigation();
  const { setAddress, onFinish } = useAddressWizard();

  useEffect(() => {
    setAddress(value);
    onFinish.current = onChange;
  }, [onChange, onFinish, setAddress, value]);

  useEffect(() => {
    if (visible) navigation.navigate('AddressWizardPartOne');
  }, [navigation, visible]);
  return <></>;
};
