import { FloatingButton } from '@components/Buttons/FloatingButton';
import { SearchField } from '@components/Fields/SearchField';
import { ActionCard } from '@components/Layout/ActionCard';
import { theme } from '@globals/styles/theme';
import { Feather, Ionicons } from '@expo/vector-icons';
import React, { useCallback, useRef, useState } from 'react';
import { Alert, Platform, View, Text } from 'react-native';
import { ColaMap } from '@components/Maps/ColaMap';
import { useNavigation } from '@react-navigation/native';
import { ColaBottomSheet } from '@components/Layout/ColaBottomSheet';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { BlankSpace } from '@components/Layout/BlankSpace';
import { sampleActions } from '@globals/constants/temp';
import { useDrawer } from '@hooks/useDrawer';
import { Drawer } from '@components/Layout/Drawer';
import * as Location from 'expo-location';
import { RECIFE_LAT_LNG } from '@constants/locations';
import MapView, { Region } from 'react-native-maps';
import { Action } from '@ts/entities/Action';
import { ActionPeek } from '@components/ActionPeek';
import { styles } from './style';

export const Home: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const navigation = useNavigation();
  const drawer = useDrawer();

  const testAlert = () => {
    if (Platform.OS === 'web') {
      alert(searchText);
    } else {
      Alert.alert(searchText);
    }
  };

  const bottomSheetRef = useRef<BottomSheet>(null);
  const retractModal = () => bottomSheetRef.current?.snapTo(0);
  const openAction = () => navigation.navigate('Action');
  const handleDrawerButtonPress = () => drawer.open();
  const mapRef = useRef<MapView>({} as MapView);

  const handleLocateButtonPress = useCallback(async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Não foi possível obter sua localização.');
      return;
    }
    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Lowest,
    });
    const newLatLng: Region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    mapRef.current?.animateToRegion(newLatLng);
  }, []);

  const handleCreateActionButtonPress = useCallback(
    () => navigation.navigate('ActionForm'),
    [navigation]
  );

  const [selectedAction, setSelectedAction] = useState<Action | null>(null);
  const [actionPeekOpen, setActionPeekOpen] = useState(false);

  const openActionPeek = useCallback((action: Action) => {
    setSelectedAction(action);
    setActionPeekOpen(true);
  }, []);

  const closeActionPeek = useCallback(() => {
    setActionPeekOpen(false);
  }, []);

  const openActionDetails = useCallback(() => {
    // TODO
    closeActionPeek();
    navigation.navigate('Action');
  }, [navigation, closeActionPeek]);

  return (
    <>
      <View style={styles.container}>
        <FloatingButton
          Icon={() => (
            <Ionicons
              name="menu-sharp"
              size={24}
              color={theme.colors.primary}
            />
          )}
          onPress={handleDrawerButtonPress}
        />
        <FloatingButton
          right
          Icon={() => <Feather name="plus" size={24} color="#fff" />}
          onPress={handleCreateActionButtonPress}
          styles={{
            container: { backgroundColor: theme.colors.primary, right: 75 },
          }}
        />
        <FloatingButton
          right
          Icon={() => (
            <Ionicons name="locate" size={24} color={theme.colors.primary} />
          )}
          onPress={handleLocateButtonPress}
        />
        <ColaMap
          web={{
            center: {
              lat: 37.78825,
              lng: -122.4324,
            },
            zoom: 10,
            options: {
              disableDefaultUI: true,
            },
          }}
          mobile={{
            initialRegion: {
              ...RECIFE_LAT_LNG,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            },
            ref: mapRef,
            onTouchStart: retractModal,
          }}
          markers={sampleActions.map((a) => ({
            key: a.id,
            latLng: a.location.latLng,
            onClick: () => openActionPeek(a),
          }))}
        />
        <ColaBottomSheet
          snapPoints={['20%', '50%', '80%']}
          index={1}
          sheetRef={bottomSheetRef}
          handleComponent={() => <View style={styles.bottomMenuDrawer} />}
        >
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
            <BottomSheetFlatList
              data={sampleActions}
              ItemSeparatorComponent={BlankSpace}
              contentContainerStyle={{ paddingVertical: 24 }}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ActionCard data={item} onTouchEndCapture={openAction} />
              )}
            />
          </View>
        </ColaBottomSheet>
      </View>
      <ActionPeek
        isOpen={actionPeekOpen}
        onClose={closeActionPeek}
        data={selectedAction}
        onDetailsClick={openActionDetails}
      />
      <Drawer />
    </>
  );
};
