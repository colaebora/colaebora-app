import React, { ReactNode } from 'react';
import { Platform, View } from 'react-native';
import { LoadScript, GoogleMap, GoogleMapProps } from '@react-google-maps/api';
import MapView, { MapViewProps } from 'react-native-maps';
import { styles, webContainerStyle } from './style';

interface CrossPlatformMapProps {
  web: GoogleMapProps;
  mobile: MapViewProps;
  children?: ReactNode;
}

export const CrossPlatformMap: React.FC<CrossPlatformMapProps> = ({
  web,
  mobile,
  children,
}: CrossPlatformMapProps) => {
  const platformIsWeb = Platform.OS === 'web';
  const { GOOGLE_MAPS_WEB_API_KEY } = process.env;

  if (platformIsWeb && !GOOGLE_MAPS_WEB_API_KEY)
    throw new Error(
      'Please provide GOOGLE_MAPS_WEB_API_KEY in your .env file.'
    );

  return platformIsWeb ? (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_WEB_API_KEY as string}>
      <GoogleMap mapContainerStyle={webContainerStyle} {...web}>
        {children}
      </GoogleMap>
    </LoadScript>
  ) : (
    <View style={styles.container}>
      <MapView {...mobile} style={styles.map}>
        {children}
      </MapView>
    </View>
  );
};
