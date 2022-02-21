import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { theme } from '@globals/styles/theme';

import LoginBgTexture from '@assets/login-bg-texture.svg';
import LoginLogo from '@assets/login-logo.svg';
import { useAuth } from '@hooks/useAuth';
import { PrimaryButton } from '@components/Buttons/PrimaryButton';
import { styles } from './style';

export const Login: React.FC = () => {
  const { enterAsGuest, handleGoogleLogin, handleOrgLogin } = useAuth();

  const handleSkipLogin = () => enterAsGuest();

  const [loading, setloading] = useState(false);

  const sleep = useCallback(
    async (ms) => new Promise((r) => setTimeout(() => r(''), ms)),
    []
  );

  const handleLogin = useCallback(
    async (type: 'user' | 'org') => {
      setloading(true);
      await sleep(1000);
      if (type === 'user') handleGoogleLogin();
      else handleOrgLogin();
    },
    [handleGoogleLogin, handleOrgLogin, sleep]
  );

  return (
    <View style={styles.container}>
      <LoginBgTexture
        style={styles.loginBgTexture}
        // width="100%"
        fill="#fff"
        fillOpacity={1}
        opacity={1}
      />
      <View style={styles.loginSheet}>
        <PrimaryButton
          text="Entrar com o Google"
          Icon={() =>
            loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <AntDesign name="google" color="white" size={16} />
            )
          }
          onPress={() => handleLogin('user')}
          styles={{
            container: {
              backgroundColor: loading
                ? theme.colors.primaryBgDark
                : theme.colors.primary,
            },
          }}
        />
        <View style={styles.skipLogin} onTouchEnd={() => handleLogin('org')}>
          <Feather name="log-in" color={theme.colors.primary} size={24} />
          <Text style={styles.skipLoginText}>Entrar como visitante</Text>
        </View>
      </View>
      <View style={styles.logoContainer}>
        <LoginLogo />
      </View>
    </View>
  );
};
