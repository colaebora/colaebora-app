import React, { FC } from 'react';
import { Feather } from '@expo/vector-icons';
import { useAuth } from '@hooks/useAuth';

import { Image, Text, View } from 'react-native';
import { styles } from './style';

export const DrawerHeader: FC = () => {
  const { user, logout } = useAuth();

  return user ? (
    <View style={styles.container}>
      <Image
        source={{ uri: user.photo }}
        style={styles.avatar}
        resizeMode="stretch"
      />
      <View style={styles.textsContainer}>
        <Text style={styles.username}>{user.name}</Text>
        <Text style={styles.editProfile}>Editar perfil</Text>
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.avatarPlaceholder}>
        <Feather name="user" color="white" size={28} />
      </View>
      <View style={styles.textsContainer}>
        <Text style={styles.username}>Convidado</Text>
        <Text style={styles.editProfile} onPress={logout}>
          Fazer login
        </Text>
      </View>
    </View>
  );
};
