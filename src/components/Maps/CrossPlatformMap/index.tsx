import React, { ComponentClass, ReactNode } from 'react';
import { ViewStyle, Platform, View } from 'react-native';
import {
  GoogleMap,
  withGoogleMap,
  WithGoogleMapProps,
  GoogleMapProps,
  withScriptjs,
  WithScriptjsProps,
} from 'react-google-maps';
import MapView, { MapViewProps } from 'react-native-maps';
import { GOOGLE_MAPS_WEB_API_URL } from '@globals/constants/urls';

interface CrossPlatformMapProps {
  web: GoogleMapProps;
  mobile: MapViewProps;
  style: {
    container: ViewStyle;
    map: ViewStyle;
  };
  children?: ReactNode;
}

export const CrossPlatformMap: React.FC<CrossPlatformMapProps> = ({
  web,
  mobile,
  style,
  children,
}: CrossPlatformMapProps) => {
  const WebMap: ComponentClass<WithScriptjsProps & WithGoogleMapProps> =
    withScriptjs(withGoogleMap(() => <GoogleMap {...web} />));

  // using alias for better code readability
  const MobileMap = MapView;

  const platformIsWeb = Platform.OS === 'web';
  const { GOOGLE_MAPS_WEB_API_KEY } = process.env;

  if (platformIsWeb && !GOOGLE_MAPS_WEB_API_KEY)
    throw new Error(
      'Please provide GOOGLE_MAPS_WEB_API_KEY in your .env file.'
    );

  return platformIsWeb ? (
    <WebMap
      googleMapURL={GOOGLE_MAPS_WEB_API_URL + GOOGLE_MAPS_WEB_API_KEY}
      containerElement={<View style={style.container} />}
      loadingElement={<View style={style.map} />}
      mapElement={<View style={style.map} />}
    >
      {children}
    </WebMap>
  ) : (
    <View style={style.container}>
      <MobileMap {...mobile} style={style.map}>
        {children}
      </MobileMap>
    </View>
  );
};
