import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Platform, StyleSheet, Text, View } from 'react-native';
import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import { SearchField } from '@components/Fields/SearchField';

const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  const [searchText, setSearchText] = useState<string>('');

  const testAlert = () => {
    if (Platform.OS === 'web') {
      alert(searchText);
    } else {
      Alert.alert(searchText);
    }
  };

  if (!fontsLoaded) return <AppLoading />;

  return (
    <View style={styles.container}>
      <SearchField
        value={searchText}
        set={setSearchText}
        callback={testAlert}
      />
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '20%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default registerRootComponent(App);
