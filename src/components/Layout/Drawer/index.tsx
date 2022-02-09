import React, { FC, useEffect, useMemo } from 'react';
import { useDrawer } from '@hooks/useDrawer';

import { View, Dimensions, Text } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';
import { theme } from '@globals/styles/theme';
import { useAuth } from '@hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import { DrawerHeader } from './DrawerHeader';
import { DrawerListItem } from './DrawerListItem';

const { width } = Dimensions.get('window');

export const Drawer: FC = () => {
  const navigation = useNavigation();
  const { isLoggedIn, logout } = useAuth();
  const { isOpen, close } = useDrawer();

  const drawerWidth = useMemo(() => width * 0.7, []);
  const drawerPosX = useSharedValue(-drawerWidth);

  const drawerAnimStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: drawerPosX.value }],
  }));

  const overlayAnimStyle = useAnimatedStyle(() => ({
    opacity: interpolate(drawerPosX.value, [-drawerWidth, 0], [0, 1]),
  }));

  useEffect(() => {
    if (isOpen) {
      drawerPosX.value = withTiming(0, {
        duration: 500,
        easing: Easing.out(Easing.exp),
      });
    } else {
      drawerPosX.value = withTiming(-drawerWidth, {
        duration: 500,
        easing: Easing.out(Easing.exp),
      });
    }
    // eslint-disable-next-line
  }, [isOpen]);

  return (
    <View
      style={[styles.outerContainer]}
      pointerEvents={isOpen ? 'auto' : 'none'}
    >
      <Animated.View
        style={[styles.overlay, overlayAnimStyle]}
        onTouchStart={close}
      />
      <Animated.View
        style={[styles.container, { width: drawerWidth }, drawerAnimStyle]}
      >
        <DrawerHeader />
        {isLoggedIn && (
          <DrawerListItem
            icon={
              <Feather name="bell" color={theme.colors.primary} size={24} />
            }
            title="Notificações"
          />
        )}
        {isLoggedIn && (
          <DrawerListItem
            icon={
              <Feather name="user" color={theme.colors.primary} size={24} />
            }
            title="Suas ações"
            onTouchStart={() => navigation.navigate('MyActions')}
          />
        )}
        {isLoggedIn && (
          <DrawerListItem
            icon={
              <Feather
                name="user-check"
                color={theme.colors.primary}
                size={24}
              />
            }
            title="Aprovações pendentes"
            onTouchStart={() => navigation.navigate('PendingApprovals')}
          />
        )}
        <DrawerListItem
          icon={
            <Feather name="settings" color={theme.colors.primary} size={24} />
          }
          title="Configurações"
        />
        <DrawerListItem
          icon={<Feather name="file" color={theme.colors.primary} size={24} />}
          title="Termos de uso"
        />
        {isLoggedIn && (
          <DrawerListItem
            icon={
              <Feather name="log-out" color={theme.colors.primary} size={24} />
            }
            onTouchEnd={logout}
            title="Sair"
          />
        )}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Reportar um problema</Text>
          <Text style={styles.footerText}>Fale conosco</Text>
        </View>
      </Animated.View>
    </View>
  );
};
