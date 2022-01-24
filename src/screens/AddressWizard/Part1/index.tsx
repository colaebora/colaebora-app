import { FloatingButton } from '@components/Buttons/FloatingButton';
import { HeaderText } from '@components/Layout/HeaderText';
import { LimitedText } from '@components/Layout/LimitedText';
import { Feather } from '@expo/vector-icons';
import { theme } from '@globals/styles/theme';
import { useAddressWizard } from '@hooks/useAddressWIzard';
import { useDebounce } from '@hooks/useDebounce';
import { useNavigation } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/stack';
import {
  GeoListItem,
  GooglePlacesService,
} from '@services/googlePlaces.service';
import { Address } from '@ts/entities/Address';
import React, { FC, useCallback, useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Text,
  View,
} from 'react-native';
import {
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native-gesture-handler';
import { styles } from './style';

export const AddressWizardPartOne: FC = () => {
  const { setAddress } = useAddressWizard();
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();

  const next = useCallback(
    (address: Address) => {
      setAddress(address);
      navigation.navigate('AddressWizardPartTwo');
    },
    [navigation, setAddress]
  );

  const [addressSearch, setAddressSearch] = useState<string>('');
  const [suggestions, setSuggestions] = useState<GeoListItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleGeoItemPress = useCallback(
    async (item: GeoListItem) => {
      setLoading(true);
      const latLng = await GooglePlacesService.addressToCoordinates(
        item.fullText
      );
      const { street, number } = GooglePlacesService.tryExtractStreetAndNumber(
        item.mainText
      );
      const address: Address = {
        latLng,
        number,
        street,
      };
      setLoading(false);
      next(address);
    },
    [next]
  );

  const updateSuggestions = useCallback(async () => {
    const newSuggestions = await GooglePlacesService.getSuggestions(
      addressSearch
    );
    setSuggestions(newSuggestions);
    setLoading(false);
  }, [addressSearch]);

  const updateSuggestionsDebounced = useDebounce(updateSuggestions, 1000);

  const onChangeAddressSearch = useCallback(
    (newSearch: string): void => {
      setLoading(true);
      setAddressSearch(newSearch);
      updateSuggestionsDebounced();
    },
    [updateSuggestionsDebounced]
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}
      behavior="padding"
      enabled
      keyboardVerticalOffset={headerHeight}
    >
      <View style={styles.container}>
        <FloatingButton
          Icon={() => (
            <Feather name="arrow-left" size={24} color={theme.colors.primary} />
          )}
          onPress={() => navigation.goBack()}
        />
        <HeaderText>Localização</HeaderText>
        <View style={styles.body}>
          <View style={styles.searchField}>
            <Feather
              name="map-pin"
              size={16}
              color={theme.colors.gray}
              style={styles.searchFieldIcon}
            />
            <TextInput
              value={addressSearch}
              onChangeText={(t) => onChangeAddressSearch(t)}
              placeholder="Buscar por endereço..."
              style={styles.searchFieldInput}
            />
            {loading && (
              <ActivityIndicator
                size="small"
                color={theme.colors.text}
                style={{ marginRight: 16 }}
              />
            )}
          </View>
          {loading ? (
            <></>
          ) : (
            <FlatList
              data={suggestions}
              contentContainerStyle={styles.geoList}
              keyExtractor={(item) => item.fullText}
              renderItem={({ item }: { item: GeoListItem }) => (
                <TouchableOpacity
                  style={styles.geoListItem}
                  onPress={() => handleGeoItemPress(item)}
                >
                  <Feather name="map-pin" size={16} color={theme.colors.gray} />
                  <View style={styles.geoListItemData}>
                    <Text style={styles.geoListItemPrimaryText}>
                      {item.mainText}
                    </Text>
                    <Text style={styles.geoListItemSecondaryText}>
                      <LimitedText limit={40}>{item.secondaryText}</LimitedText>
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
