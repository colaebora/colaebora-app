import { FloatingButton } from '@components/Buttons/FloatingButton';
import React, { useCallback, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme } from '@globals/styles/theme';

import { ProfilePicture } from '@components/Layout/ProfilePicture';
import { useNavigation } from '@react-navigation/native';
import { IconText } from '@components/Layout/IconText';
import { globalStyles } from '@globals/styles/global';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { CategoryBubble } from '@components/Layout/CategoryBubble';
import { Divider } from '@components/Layout/Divider';
import { ColaMapBanner } from '@components/Maps/ColaMapBanner';
import { StackScreenProps } from '@react-navigation/stack';
import { AppRoutesParamList } from '@ts/routes/AppRoutes';
import { styles } from './style';

const categories = [
  { id: 1, name: 'Causas sociais' },
  { id: 2, name: 'Vestimenta' },
  { id: 3, name: 'Higiene' },
  { id: 4, name: 'Alimentação' },
];

type Props = StackScreenProps<AppRoutesParamList, 'Action'>;

export const Action: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation();
  const data = route.params?.action;

  const [pending, setPending] = useState(false);

  const handleParticipate = useCallback(() => {
    Alert.alert(
      'Participar da ação',
      `Deseja participar desta ação? Será enviada uma mensagem ao organizador.`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () => {
            setPending(true);
          },
        },
      ]
    );
  }, []);

  const handleLeave = useCallback(() => {
    Alert.alert(
      'Cancelar participicação',
      `Deseja cancelar sua participação nesta ação?`,
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim, cancelar',
          onPress: () => {
            setPending(false);
          },
        },
      ]
    );
  }, []);

  if (!data) return <></>;

  return (
    <ScrollView style={styles.container}>
      <FloatingButton
        Icon={() => (
          <Feather name="arrow-left" size={24} color={theme.colors.primary} />
        )}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.header}>
        <View style={styles.profilePicture}>
          <ProfilePicture source={{ uri: data.imgUrl }} />
        </View>
        <Text style={styles.name}>{data.name}</Text>
        <View style={styles.row}>
          <View style={[styles.row, { marginTop: 4 }]}>
            <IconText
              onTouchEndCapture={() => navigation.navigate('Organization')}
              icon={
                <Feather name="globe" color={theme.colors.gray} size={16} />
              }
            >
              {data.organization.name}
            </IconText>
            <IconText
              icon={
                <Feather name="globe" color={theme.colors.gray} size={16} />
              }
            >
              {data.location.city} - {data.location.state}
            </IconText>
          </View>
        </View>
        <Text style={styles.assigneeCount}>
          {data.volunteersAssignedCount} pessoas estão participando dessa ação
        </Text>
        {pending ? (
          <>
            <Text
              style={[styles.assigneeCount, { marginTop: 5, marginBottom: 12 }]}
            >
              Solicitação pendente
            </Text>
            <TouchableOpacity
              onPress={handleLeave}
              style={[styles.leaveButton, { marginBottom: 20 }]}
            >
              <Text style={styles.leaveButtonText}>Cancelar solicitação</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity
            onPress={handleParticipate}
            style={styles.joinButton}
          >
            <Text style={styles.joinButtonText}>Participar da ação</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.body}>
        <Text style={globalStyles.title}>Descrição</Text>
        <Text style={globalStyles.text}>{data.about}</Text>

        <Text style={[globalStyles.title, { marginTop: 16 }]}>
          Informações da ação
        </Text>
        <View style={styles.actionInfo}>
          <IconText
            icon={
              <Feather name="calendar" color={theme.colors.primary} size={16} />
            }
          >
            13 de fevereiro de 2022
          </IconText>
          <Divider style={styles.actionInfoDivider} />
          <IconText
            icon={
              <Feather name="clock" color={theme.colors.primary} size={16} />
            }
          >
            15:00
          </IconText>
          <Divider style={styles.actionInfoDivider} />
          <IconText
            icon={
              <Feather name="map-pin" color={theme.colors.primary} size={16} />
            }
          >
            {data.location.street}, {data.location.number}, 51190-460, Recife -
            PE
          </IconText>
          <Divider style={styles.actionInfoDivider} />
          <IconText
            icon={
              <Feather name="phone" color={theme.colors.primary} size={16} />
            }
          >
            (81) 9 9792 3312
          </IconText>
          <Divider style={styles.actionInfoDivider} />
        </View>

        <ScrollView horizontal>
          {categories.map((category, index) => (
            <CategoryBubble
              name={category.name}
              key={category.id}
              style={{
                margin: 5,
                marginLeft: index === 0 ? 0 : 5,
                marginRight: index === categories.length - 1 ? 0 : 5,
              }}
            />
          ))}
        </ScrollView>
        <ColaMapBanner
          latLng={{
            lat: data.location.latLng.latitude,
            lng: data.location.latLng.longitude,
          }}
          text={`${data.location.street}, ${data.location.number}, 51190-460, Recife - PE`}
        />
      </View>
    </ScrollView>
  );
};
