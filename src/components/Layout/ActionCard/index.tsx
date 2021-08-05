import React from 'react';
import { View, Text, Image, ViewProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ActionCardData } from '@ts/ActionCardData';
import { ProgressBar } from '@components/Layout/ProgressBar';
import { CategoryBubble } from '@components/Layout/CategoryBubble';
import { theme } from '@globals/styles/theme';
import { styles } from './style';

interface ActionCardProps extends ViewProps {
  data: ActionCardData;
}

export const ActionCard: React.FC<ActionCardProps> = ({
  data,
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
    <View style={styles.container} {...rest}>
      <View style={[styles.row, { marginBottom: 17 }]}>
        <Image source={{ uri: imgUrl }} style={styles.actionImg} />
        <View style={styles.column}>
          <Text style={styles.actionName}>{name}</Text>
          <View style={styles.row}>
            <Feather name="map-pin" width={11} height={11} />
            <Text style={styles.distance}>{distanceInKm}km</Text>
          </View>
        </View>
      </View>
      <View style={[styles.row, { marginBottom: 12 }]}>
        <ProgressBar
          value={volunteersAssigned}
          total={volunteersNeeded}
          style={{ marginRight: 16 }}
        />
        <Feather
          name="users"
          color={theme.colors.primary}
          width={16}
          height={16}
        />
        <Text style={styles.userCount}>
          {volunteersAssigned}/{volunteersNeeded} pessoas ajudando
        </Text>
      </View>
      <View style={styles.categories}>
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
      </View>
    </View>
  );
};
