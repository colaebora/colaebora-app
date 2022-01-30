import React, { ReactNode } from 'react';
import { Platform, View } from 'react-native';
import { LoadScript, GoogleMap, GoogleMapProps } from '@react-google-maps/api';
import MapView, { MapViewProps, Marker } from 'react-native-maps';
import { LatLng } from '@ts/entities/LatLng';
import { NO_OP } from '@globals/utils/noOp';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles, webContainerStyle } from './style';

interface GenericMarker {
  latLng: LatLng;
  onClick?: () => void;
  key: string;
}

interface ColaMapProps {
  web: GoogleMapProps;
  mobile: MapViewProps & { ref?: React.MutableRefObject<MapView> };
  markers?: Array<GenericMarker>;
  children?: ReactNode;
}

const MARKER_COLORS: string[] = ['#EC1C24', '#FF7811', '#00A94A'];

function getRandomMarkerColorBySeed(seed: string) {
  // TODO
  const color = MARKER_COLORS[parseInt(seed, 10) - 1];
  return color;
}

export const ColaMap: React.FC<ColaMapProps> = ({
  web,
  mobile,
  markers,
  children,
}: ColaMapProps) => {
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
        {markers &&
          markers.map((e) => (
            <Marker
              key={e.key}
              coordinate={{
                latitude: e.latLng.latitude,
                longitude: e.latLng.longitude,
              }}
              onPress={e.onClick ?? NO_OP}
              style={styles.markerContainer}
            >
              <FontAwesome5
                name="map-marker-alt"
                color={getRandomMarkerColorBySeed(e.key)}
                size={45}
                style={styles.marker}
              />
            </Marker>
          ))}
      </MapView>
    </View>
  );
};
