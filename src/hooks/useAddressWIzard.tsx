import { Address } from '@ts/entities/Address';
import { SetState } from '@ts/etc/SetState';
import React, {
  createContext,
  FC,
  MutableRefObject,
  useContext,
  useRef,
  useState,
} from 'react';

type AddressWizardData = {
  address: Address;
  setAddress: SetState<Address>;
  onFinish: MutableRefObject<AddressFunction>;
};

const AddressWizardContext = createContext({} as AddressWizardData);

type AddressFunction = (a: Address) => unknown;

export const useAddressWizard = (): AddressWizardData =>
  useContext(AddressWizardContext);

export const EMPTY_ADDRESS = {
  street: '',
  number: '',
  city: '',
  state: '',
  latLng: {
    latitude: 37.78825,
    longitude: -122.4324,
  },
};

export const AddressWizardProvider: FC = ({ children }) => {
  const [address, setAddress] = useState<Address>(EMPTY_ADDRESS);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onFinish = useRef<AddressFunction>(() => {});

  const data: AddressWizardData = {
    address,
    setAddress,
    onFinish,
  };

  return (
    <AddressWizardContext.Provider value={data}>
      {children}
    </AddressWizardContext.Provider>
  );
};
