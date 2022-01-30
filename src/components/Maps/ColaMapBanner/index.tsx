import React, { ReactNode } from 'react';
import { Platform, View, ViewStyle } from 'react-native';
import { LoadScript, GoogleMap } from '@react-google-maps/api';
import MapView, { MapViewProps } from 'react-native-maps';
import { IconText } from '@components/Layout/IconText';
import { ShortLatLng } from '@ts/entities/LatLng';
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
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
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
      <MapView
        liteMode
        pointerEvents="none"
        {...mobileProps}
        style={[styles.map, mobileStyle]}
      >
        <View style={styles.card}>
          <IconText>{text}</IconText>
        </View>
        {children}
      </MapView>
    </View>
  );
};
