import React from 'react';
import { View, Text, Image, ViewProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ActionCardData } from '@ts/ActionCardData';
import { ProgressBar } from '@components/Layout/ProgressBar';
import { CategoryBubble } from '@components/Layout/CategoryBubble';
import { theme } from '@globals/styles/theme';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './style';
import { Location } from '../Location';

interface ActionCardProps extends ViewProps {
  data: ActionCardData;
  past?: boolean;
}

export const ActionCard: React.FC<ActionCardProps> = ({
  data,
  style,
  past,
  ...rest
}: ActionCardProps) => {
  const {
    name,
    imgUrl,
    distanceInKm,
    volunteersAssigned,
    volunteersNeeded,
    categories,
  } = data;

  return (
    <View style={[styles.container, style]} {...rest}>
      <View style={[styles.row, { marginBottom: 17 }]}>
        <Image source={{ uri: imgUrl }} style={styles.actionImg} />
        <View style={styles.column}>
          <Text style={styles.actionName}>{name}</Text>
          <Location>{distanceInKm}km</Location>
        </View>
      </View>
      <View style={[styles.row, { marginBottom: 12 }]}>
        {!past ? (
          <ProgressBar
            value={volunteersAssigned}
            total={volunteersNeeded}
            style={{ marginRight: 16 }}
          />
        ) : null}
        <Feather
          name="users"
          color={theme.colors.primary}
          width={16}
          height={16}
        />
        <Text style={styles.userCount}>
          {!past
            ? `${volunteersAssigned}/${volunteersNeeded} pessoas ajudando`
            : `${volunteersAssigned} pessoas ajudaram`}
        </Text>
      </View>
      <ScrollView horizontal style={styles.categories}>
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
    </View>
  );
};
