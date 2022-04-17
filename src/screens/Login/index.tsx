import LoginBgTexture from '@assets/login-bg-texture.svg';
import LoginLogo from '@assets/login-logo.svg';
import { PrimaryButton } from '@components/Buttons/PrimaryButton';
import { AntDesign, Feather } from '@expo/vector-icons';
import { theme } from '@globals/styles/theme';
import { useAuth } from '@hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { styles } from './style';
export const Login: React.FC = () => {
  const {
    enterAsGuest,
    handleGoogleLogin,
    handleOrgLogin,
    registered,
    googleToken,
  } = useAuth();

  const navigation = useNavigation();
  const handleSkipLogin = () => enterAsGuest();

  const [loading, setLoading] = useState(false);

  const sleep = useCallback(
    async (ms) => new Promise((r) => setTimeout(() => r(''), ms)),
    []
  );

  const handleLogin = useCallback(
    async (type: 'user' | 'org') => {
      setLoading(true);
      await sleep(1000);
      if (type === 'user') handleGoogleLogin();
      else null;
    },
    [handleGoogleLogin, handleOrgLogin, sleep]
  );
  const token = googleToken;
  useEffect(() => {
    if (registered === 'isRegistered') {
      navigation.navigate('Home');
    }
    if (registered === 'isNotRegistered') {
      navigation.navigate('RegisterScreen');
    }
  }, [registered, token]);
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
