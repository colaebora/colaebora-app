import React from 'react';
import { View, Text, Image, ViewProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ProgressBar } from '@components/Layout/ProgressBar';
import { CategoryBubble } from '@components/Layout/CategoryBubble';
import { theme } from '@globals/styles/theme';
import { ScrollView } from 'react-native-gesture-handler';
import { Action } from '@ts/entities/Action';
import { getInterestDisplayName } from '@globals/utils/getInterestDisplayName';
import { styles } from './style';
import { Location } from '../Location';

interface ActionCardProps extends ViewProps {
  data: Action;
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
    distanceInMeters,
    volunteersAssignedCount,
    volunteersNeededCount,
    categories,
  } = data;

  return (
    <View style={[styles.container, style]} {...rest}>
      <View style={[styles.row, { marginBottom: 17 }]}>
        <Image source={{ uri: imgUrl }} style={styles.actionImg} />
        <View style={styles.column}>
          <Text style={styles.actionName}>{name}</Text>
          <Location>{distanceInMeters / 1000}km</Location>
        </View>
      </View>
      <View style={[styles.row, { marginBottom: 12 }]}>
        {!past ? (
          <ProgressBar
            value={volunteersAssignedCount}
            total={volunteersNeededCount}
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
            ? `${volunteersAssignedCount}/${volunteersNeededCount} pessoas ajudando`
            : `${volunteersAssignedCount} pessoas ajudaram`}
        </Text>
      </View>
      <ScrollView horizontal style={styles.categories}>
        {categories.map((category, index) => (
          <CategoryBubble
            name={getInterestDisplayName(category)}
            key={category}
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
