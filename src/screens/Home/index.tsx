import { FloatingButton } from '@components/Buttons/FloatingButton';
import { SearchField } from '@components/Fields/SearchField';
import { ActionCard } from '@components/Layout/ActionCard';
import { theme } from '@globals/styles/theme';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Alert, Platform, View, Text, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { styles } from './style';

export const Home: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');

  const testAlert = () => {
    if (Platform.OS === 'web') {
      alert(searchText);
    } else {
      Alert.alert(searchText);
    }
  };

  const sampleAction = {
    imgUrl: 'https://www.katolik.pl/min_mid_big/mid/35479.jpg',
    name: 'Ajudar comunidade carente',
    distanceInKm: 2,
    volunteersNeeded: 15,
    volunteersAssigned: 5,
    categories: [
      { id: 1, name: 'Causas sociais' },
      { id: 2, name: 'Vestimenta' },
      { id: 3, name: 'Higiene' },
      { id: 4, name: 'Alimentação' },
    ],
  };

  const mapPlaceholderImgUrl =
    'https://www.viajandonoblog.com/wp-content/uploads/2015/06/Mapa-de-Recife-Pernambuco-Google-Maps-em-30.06.15.jpg';

  return (
    <View style={styles.container}>
      <FloatingButton
        Icon={() => (
          <Ionicons name="menu-sharp" size={24} color={theme.colors.primary} />
        )}
        style={{
          container: { top: getStatusBarHeight() + 15, left: 15, padding: 12 },
        }}
      />
      <FloatingButton
        Icon={() => (
          <Ionicons name="locate" size={24} color={theme.colors.primary} />
        )}
        style={{
          container: { top: getStatusBarHeight() + 15, right: 15, padding: 12 },
        }}
      />
      <View style={styles.mapContainer}>
        <Image source={{ uri: mapPlaceholderImgUrl }} style={{ flex: 1 }} />
      </View>
      <View style={styles.bottomMenu}>
        <SearchField
          value={searchText}
          set={setSearchText}
          callback={testAlert}
        />
        <View style={styles.actionsHeader}>
          <Text style={styles.actionsTitle}>Ações nessa região</Text>
          <Text style={styles.actionsLink}>Ver todas</Text>
        </View>
        <ActionCard data={sampleAction} />
      </View>
    </View>
  );
};
