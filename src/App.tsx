import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import { AuthProvider } from '@hooks/useAuth';
import { DrawerProvider } from '@hooks/useDrawer';
import { AddressWizardProvider } from '@hooks/useAddressWIzard';
import { Routes } from './routes';

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
