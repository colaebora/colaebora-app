import { FloatingButton } from '@components/Buttons/FloatingButton';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { theme } from '@globals/styles/theme';

import { TouchableOpacity } from 'react-native-gesture-handler';
import LoginBg from '@assets/login-bg.png';
import { useAuth } from '@hooks/useAuth';
import { styles } from './style';

export const Login: React.FC = () => {
  const { enterAsGuest, handleGoogleLogin } = useAuth();

  const handleSkipLogin = () => enterAsGuest();

  return (
    <View style={styles.container}>
      <Image source={LoginBg} style={styles.image} resizeMode="stretch" />
      <View style={styles.loginSheet}>
        <TouchableOpacity
          style={styles.googleLogin}
          onPress={handleGoogleLogin}
        >
          <AntDesign name="google" color="white" size={16} />
          <Text style={styles.googleLoginText}>Entrar com o Google</Text>
        </TouchableOpacity>
        <View style={styles.skipLogin} onTouchEnd={handleSkipLogin}>
          <Feather name="log-in" color={theme.colors.primary} size={24} />
          <Text style={styles.skipLoginText}>Entrar como visitante</Text>
        </View>
      </View>
    </View>
  );
};
