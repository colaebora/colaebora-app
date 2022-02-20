import React, { ReactNode } from 'react';
import { Platform, Text, View, ViewStyle } from 'react-native';
import { LoadScript, GoogleMap } from '@react-google-maps/api';
import MapView, { MapViewProps } from 'react-native-maps';
import { IconText } from '@components/Layout/IconText';
import { ShortLatLng } from '@ts/entities/LatLng';
import { Feather } from '@expo/vector-icons';
import { getMapZoom } from '@globals/utils/getMapZoom';
import { styles, webContainerStyle } from './style';

interface ColaMapBannerProps {
  latLng: ShortLatLng;
  text?: string;
  mobile?: MapViewProps & { ref?: React.MutableRefObject<MapView> };
  children?: ReactNode;
  mobileStyle?: ViewStyle;
}

export const ColaMapBanner: React.FC<ColaMapBannerProps> = ({
  latLng,
  text,
  children,
  mobileStyle,
  mobile = {},
}: ColaMapBannerProps) => {
  const platformIsWeb = Platform.OS === 'web';
  const { GOOGLE_MAPS_WEB_API_KEY } = process.env;

  if (platformIsWeb && !GOOGLE_MAPS_WEB_API_KEY)
    throw new Error(
      'Please provide GOOGLE_MAPS_WEB_API_KEY in your .env file.'
    );

  const web = {
    center: latLng,
    zoom: 10,
    options: {
      disableDefaultUI: true,
    },
  };
  const mobileProps = {
    initialRegion: {
      latitude: latLng.lat,
      longitude: latLng.lng,
      latitudeDelta: getMapZoom(0.005).latitudeDelta,
      longitudeDelta: getMapZoom(0.005).latitudeDelta,
    },
    ...mobile,
  };

  // TODO add web support
  // TODO refactor to optimize number of loadScripts (app root)

  return platformIsWeb ? (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_WEB_API_KEY as string}>
      <GoogleMap mapContainerStyle={webContainerStyle} {...web}>
        {children}
      </GoogleMap>
    </LoadScript>
  ) : (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.row}>
          <Feather name="map-pin" size={11} />
          <Text style={styles.cardText}>{text}</Text>
        </View>
      </View>
      <MapView
        liteMode
        pointerEvents="none"
        {...mobileProps}
        style={[styles.map, mobileStyle]}
      >
        {children}
      </MapView>
    </View>
  );
};
