import { FloatingButton } from '@components/Buttons/FloatingButton';
import React from 'react';
import { Text, View } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { theme } from '@globals/styles/theme';

import { ProfilePicture } from '@components/Layout/ProfilePicture';
import { useNavigation } from '@react-navigation/native';
import { IconText } from '@components/Layout/IconText';
import { globalStyles } from '@globals/styles/global';
import { ScrollView } from 'react-native-gesture-handler';
import { CategoryBubble } from '@components/Layout/CategoryBubble';
import { Divider } from '@components/Layout/Divider';
import { sampleActions } from '@globals/constants/temp';
import { ActionCard } from '@components/Layout/ActionCard';
import { ColaMapBanner } from '@components/Maps/ColaMapBanner';
import { styles } from './style';

const categories = [
  { id: 1, name: 'Causas sociais' },
  { id: 2, name: 'Vestimenta' },
  { id: 3, name: 'Higiene' },
  { id: 4, name: 'Alimentação' },
];

export const Organization: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <FloatingButton
        Icon={() => (
          <Feather name="arrow-left" size={24} color={theme.colors.primary} />
        )}
        onPress={() => navigation.goBack()}
      />
      <FloatingButton
        right
        Icon={() => (
          <Feather
            name="message-circle"
            size={24}
            color={theme.colors.primary}
          />
        )}
      />
      <View style={styles.header}>
        <ProfilePicture
          source={{
            uri: 'http://mundocarreira.com.br/wp-content/uploads/2018/03/1-colaboracao.jpg  ',
          }}
        />
        <Text style={styles.name}>Saber Viver</Text>
        <View style={styles.row}>
          <IconText>Recife - PE</IconText>
          <View style={styles.row}>
            <AntDesign name="star" color="#E8EB36" size={11} />
            <Text style={{ marginLeft: 4 }}>4.3</Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={globalStyles.title}>Sobre o Grupo</Text>
        <Text style={globalStyles.text}>
          É uma instituição privada sem fins lucrativos, fundada em 1983,
          situada na Ilha de Deus no Recife. Estamos em uma comunidade muito
          pobre onde a maioria dos moradores são pescadores.
        </Text>
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
        <Divider />
        <Text style={globalStyles.title}>Ações desenvolvidas</Text>
        <View>
          {sampleActions.map((item) => (
            <ActionCard
              style={{ marginVertical: 7 }}
              past
              data={item}
              key={item.id}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
