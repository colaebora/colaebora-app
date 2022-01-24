import { FloatingButton } from '@components/Buttons/FloatingButton';
import { ColaMap } from '@components/Maps/ColaMap';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { theme } from '@globals/styles/theme';
import { getMapZoom } from '@globals/utils/getMapZoom';
import { useAddressWizard } from '@hooks/useAddressWIzard';
import { useNavigation } from '@react-navigation/native';
import { LatLng } from '@ts/entities/LatLng';
import React, { FC, useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './style';

export const AddressWizardPartTwo: FC = () => {
  const { address, setAddress } = useAddressWizard();
  const navigation = useNavigation();
  const [confirmationLatLng, setConfirmationLatLng] = useState<LatLng>(
    address.latLng
  );

  const next = useCallback(
    (latLng: LatLng) => {
      setAddress((prev) => ({ ...prev, latLng }));
      navigation.navigate('AddressWizardPartThree');
    },
    [navigation, setAddress]
  );

  return (
    <View style={styles.container}>
      <FloatingButton
        Icon={() => (
          <Feather name="arrow-left" size={24} color={theme.colors.primary} />
        )}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.body}>
        <ColaMap
          web={{
            center: {
              lat: confirmationLatLng.latitude,
              lng: confirmationLatLng.longitude,
            },
            zoom: 20,
            options: {
              disableDefaultUI: true,
            },
          }}
          mobile={{
            initialRegion: {
              latitude: confirmationLatLng.latitude,
              longitude: confirmationLatLng.longitude,
              latitudeDelta: getMapZoom(0.005).latitudeDelta,
              longitudeDelta: getMapZoom(0.005).longitudeDelta,
            },
            onRegionChange: ({ latitude, longitude }) => {
              setConfirmationLatLng({ latitude, longitude });
            },
          }}
        />
      </View>
      <FontAwesome
        name="map-marker"
        size={50}
        color={theme.colors.primary}
        style={styles.pin}
      />
      <View style={styles.confirmButtonContainer}>
        <TouchableOpacity
          onPress={() => next(confirmationLatLng)}
          style={styles.confirmButton}
        >
          <Text style={styles.confirmButtonText}>Confirmar localização</Text>
          <Feather name="arrow-right" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
