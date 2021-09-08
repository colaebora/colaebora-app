import React, { ReactNode } from 'react';
import { Platform, View } from 'react-native';
import { LoadScript, GoogleMap, GoogleMapProps } from '@react-google-maps/api';
import MapView, { MapViewProps } from 'react-native-maps';
import { LatLng } from '@ts/LatLng';
import { Location } from '@components/Layout/Location';
import { styles, webContainerStyle } from './style';

interface ColaMapBannerProps {
  latLng: LatLng;
  text?: string;
  children?: ReactNode;
}

export const ColaMapBanner: React.FC<ColaMapBannerProps> = ({
  latLng,
  text,
  children,
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
  const mobile = {
    initialRegion: {
      latitude: latLng.lat,
      longitude: latLng.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
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
      <MapView pointerEvents="none" {...mobile} style={styles.map}>
        <View style={styles.card}>
          <Location>{text}</Location>
        </View>
        {children}
      </MapView>
    </View>
  );
};
