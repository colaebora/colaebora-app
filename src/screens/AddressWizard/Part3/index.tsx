import { FloatingButton } from '@components/Buttons/FloatingButton';
import { TextField } from '@components/Fields/TextField';
import { ColaMap } from '@components/Maps/ColaMap';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { theme } from '@globals/styles/theme';
import { getMapZoom } from '@globals/utils/getMapZoom';
import { useAddressWizard } from '@hooks/useAddressWIzard';
import { useNavigation } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/stack';
import { Address } from '@ts/entities/Address';
import { Formik } from 'formik';
import React, { FC, useCallback } from 'react';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Yup from 'yup';
import { styles } from './style';

export const AddressWizardPartThree: FC = () => {
  const { address, onFinish } = useAddressWizard();
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();

  const confirmLocationSchema = Yup.object().shape({
    street: Yup.string().required('Insira a rua!'),
    number: Yup.string().required('Insira o número!'),
  });

  const next = useCallback(
    (data: Omit<Address, 'latLng'>) => {
      const finalAddress: Address = {
        ...address,
        number: data.number,
        street: data.street,
      };
      onFinish.current(finalAddress);

      // NOTE: react-navigation typing is missing .pop method.
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      navigation.pop(3);
    },
    [address, navigation, onFinish]
  );

  return (
    <Formik
      formik
      onSubmit={next}
      validationSchema={confirmLocationSchema}
      initialValues={{
        street: address.street || '',
        number: address.number || '',
      }}
    >
      {({ handleSubmit, values, handleBlur, handleChange, errors }) => (
        <KeyboardAvoidingView
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
          }}
          behavior="padding"
          enabled
          keyboardVerticalOffset={headerHeight}
        >
          <View style={styles.container}>
            <FloatingButton
              Icon={() => (
                <Feather
                  name="arrow-left"
                  size={24}
                  color={theme.colors.primary}
                />
              )}
              onPress={() => navigation.goBack()}
            />
            <View style={styles.mapContainer}>
              <ColaMap
                web={{
                  center: {
                    lat: address.latLng.latitude,
                    lng: address.latLng.longitude,
                  },
                  zoom: 20,
                  options: {
                    disableDefaultUI: true,
                  },
                }}
                mobile={{
                  initialRegion: {
                    latitude: address.latLng.latitude,
                    longitude: address.latLng.longitude,
                    latitudeDelta: getMapZoom(0.005).latitudeDelta,
                    longitudeDelta: getMapZoom(0.005).longitudeDelta,
                  },
                  pointerEvents: 'none',
                  style: {
                    position: 'relative',
                  },
                }}
              >
                <FontAwesome
                  name="map-marker"
                  size={50}
                  color={theme.colors.primary}
                  style={styles.pin}
                />
              </ColaMap>
            </View>
            <View style={styles.form}>
              <TextField
                label="Nome da rua"
                placeholder="Escreva o nome da rua"
                value={values.street}
                onBlur={handleBlur('street')}
                onChangeText={handleChange('street')}
                error={errors.street}
              />
              <TextField
                label="Número"
                placeholder="ex: 2542"
                value={values.number}
                onBlur={handleBlur('number')}
                onChangeText={handleChange('number')}
                error={errors.number}
              />
            </View>
            <View style={styles.confirmButtonContainer}>
              <TouchableOpacity
                onPress={() => handleSubmit()}
                style={styles.confirmButton}
              >
                <Text style={styles.confirmButtonText}>Confirmar endereço</Text>
                <Feather
                  name="check-circle"
                  size={24}
                  color="#fff"
                  style={{ marginLeft: 12 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};
