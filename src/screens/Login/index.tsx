import React from 'react';
import { Image, Text, View } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { theme } from '@globals/styles/theme';

import LoginBg from '@assets/login-bg.png';
import { useAuth } from '@hooks/useAuth';
import { PrimaryButton } from '@components/Buttons/PrimaryButton';
import { styles } from './style';

export const Login: React.FC = () => {
  const { enterAsGuest, handleGoogleLogin } = useAuth();

  const handleSkipLogin = () => enterAsGuest();

  return (
    <View style={styles.container}>
      <Image source={LoginBg} style={styles.image} resizeMode="stretch" />
      <View style={styles.loginSheet}>
        <PrimaryButton
          text="Entrar com o Google"
          Icon={() => <AntDesign name="google" color="white" size={16} />}
          onPress={handleGoogleLogin}
        />
        <View style={styles.skipLogin} onTouchEnd={handleSkipLogin}>
          <Feather name="log-in" color={theme.colors.primary} size={24} />
          <Text style={styles.skipLoginText}>Entrar como visitante</Text>
        </View>
      </View>
    </View>
  );
};
