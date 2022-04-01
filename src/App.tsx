import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';
import { AddressWizardProvider } from '@hooks/useAddressWIzard';
import { AuthProvider } from '@hooks/useAuth';
import { DrawerProvider } from '@hooks/useDrawer';
import { registerRootComponent } from 'expo';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Reactotron from '../ReactotronConfig';
import { Routes } from './routes';

if (__DEV__) {
  Reactotron.connect();
}

const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <AuthProvider>
      <DrawerProvider>
        <AddressWizardProvider>
          <StatusBar style="auto" />
          <Routes />
        </AddressWizardProvider>
      </DrawerProvider>
    </AuthProvider>
  );
};

registerRootComponent(App);
