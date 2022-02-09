import { FloatingButton } from '@components/Buttons/FloatingButton';
import React, { useCallback, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme } from '@globals/styles/theme';

import { useNavigation } from '@react-navigation/native';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { sampleUsers } from '@globals/constants/temp';
import { HeaderText } from '@components/Layout/HeaderText';
import { User } from '@ts/entities/User';
import { ProfilePicture } from '@components/Layout/ProfilePicture';
import { styles } from './style';

export const PendingApprovals: React.FC = () => {
  const navigation = useNavigation();

  const [pendingUsers, setPendingUsers] = useState(sampleUsers);

  const approveUser = useCallback(
    (user: Partial<User & { actionName: string }>) => {
      Alert.alert(
        'Aprovar usuário',
        `Deseja aceitar ${user.name} na ação ${user.actionName}?`,
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Confirmar',
            onPress: () => {
              setPendingUsers((u) => u.filter((e) => e.name !== user.name));
            },
          },
        ]
      );
    },
    []
  );

  const rejectUser = useCallback(
    (user: Partial<User & { actionName: string }>) => {
      Alert.alert(
        'Rejeitar usuário',
        `Deseja rejeitar ${user.name} na ação ${user.actionName}?`,
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Confirmar',
            onPress: () => {
              setPendingUsers((u) => u.filter((e) => e.name !== user.name));
            },
          },
        ]
      );
    },
    []
  );

  return (
    <>
      <FloatingButton
        Icon={() => (
          <Feather name="arrow-left" size={24} color={theme.colors.primary} />
        )}
        onPress={() => navigation.goBack()}
      />
      <HeaderText>Aprovações pendentes</HeaderText>
      <ScrollView style={styles.container}>
        <View style={styles.body}>
          {pendingUsers.map((u) => (
            <View style={styles.pendingUserContainer} key={u.name}>
              <View style={styles.column}>
                <ProfilePicture
                  style={{
                    width: 50,
                    height: 50,
                    borderWidth: 2,
                    marginRight: 12,
                  }}
                  source={{ uri: u.photo }}
                />
              </View>
              <View
                style={(styles.column, { alignItems: 'flex-start', flex: 1 })}
              >
                <View style={[styles.row]}>
                  <Text style={styles.name}>{u.name}</Text>
                </View>
                <Text style={styles.actionNameText}>
                  Deseja participar da ação
                </Text>
                <Text style={styles.actionName}>
                  &quot;{u.actionName}&quot;
                </Text>
              </View>
              <View style={styles.row}>
                <TouchableWithoutFeedback
                  style={{ marginRight: 14 }}
                  onPress={() => rejectUser(u)}
                >
                  <Feather
                    name="x-circle"
                    size={26}
                    color={theme.colors.failureRed}
                  />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => approveUser(u)}>
                  <Feather
                    name="check-circle"
                    size={26}
                    color={theme.colors.primary}
                  />
                </TouchableWithoutFeedback>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};
