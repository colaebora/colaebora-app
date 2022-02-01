import { FloatingButton } from '@components/Buttons/FloatingButton';
import React from 'react';
import { Text, View } from 'react-native';
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
import { styles } from './style';

const categories = [
  { id: 1, name: 'Causas sociais' },
  { id: 2, name: 'Vestimenta' },
  { id: 3, name: 'Higiene' },
  { id: 4, name: 'Alimentação' },
];

export const Action: React.FC = () => {
  const navigation = useNavigation();
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
          <ProfilePicture
            source={{ uri: 'https://www.katolik.pl/min_mid_big/mid/35479.jpg' }}
          />
        </View>
        <Text style={styles.name}>Ajudar comunidade carente</Text>
        <View style={styles.row}>
          <View style={[styles.row, { marginTop: 4 }]}>
            <IconText
              onTouchEndCapture={() => navigation.navigate('Organization')}
              icon={
                <Feather name="globe" color={theme.colors.gray} size={16} />
              }
            >
              Saber viver
            </IconText>
            <IconText
              icon={
                <Feather name="globe" color={theme.colors.gray} size={16} />
              }
            >
              Recife - PE
            </IconText>
          </View>
        </View>
        <Text style={styles.assigneeCount}>
          5 pessoas estão participando dessa ação
        </Text>
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinButtonText}>Participar da ação</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={globalStyles.title}>Descrição</Text>
        <Text style={globalStyles.text}>
          Ação social com o intuito de arrecadar fundos e distribuir alimentos
          para famílias carentes impactadas pelo COVID-19. Pensando nisso, nós
          decidimos iniciar uma Ação social para arrecadar fundos e distribuir
          alimentos para essas famílias carentes na cidade de Recife.
        </Text>

        <Text style={[globalStyles.title, { marginTop: 16 }]}>
          Informações da ação
        </Text>
        <View style={styles.actionInfo}>
          <IconText
            icon={
              <Feather name="calendar" color={theme.colors.primary} size={16} />
            }
          >
            13 de novembro de 2022
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
            Rua São Paulo, 96, 51190-460, Recife - PE
          </IconText>
          <Divider style={styles.actionInfoDivider} />
          <IconText
            icon={
              <Feather name="phone" color={theme.colors.primary} size={16} />
            }
          >
            (81) 98888-8888
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
          latLng={{ lat: 37.78825, lng: -122.4324 }}
          text="Rua São Paulo, 96, 51190-460, Recife - PE"
        />
      </View>
    </ScrollView>
  );
};
