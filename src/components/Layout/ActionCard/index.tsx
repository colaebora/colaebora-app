import React, { useCallback, useState } from 'react';
import { View, Text, Image, ViewProps, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ProgressBar } from '@components/Layout/ProgressBar';
import { CategoryBubble } from '@components/Layout/CategoryBubble';
import { theme } from '@globals/styles/theme';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { Action } from '@ts/entities/Action';
import { getInterestDisplayName } from '@globals/utils/getInterestDisplayName';
import { NO_OP } from '@globals/utils/noOp';
import { styles } from './style';
import { IconText } from '../IconText';

interface ActionCardProps extends ViewProps {
  data: Action;
  past?: boolean;
  editable?: boolean;
  onCancelAction?: (a: Action) => void;
}

export const ActionCard: React.FC<ActionCardProps> = ({
  data,
  style,
  past,
  editable,
  onCancelAction,
  ...rest
}: ActionCardProps) => {
  const {
    name,
    imgUrl,
    distanceInMeters,
    volunteersAssignedCount,
    volunteersNeededCount,
    categories,
    canceled,
  } = data;

  const [participationsPaused, setParticipationsPaused] = useState(false);

  const togglePause = useCallback(() => {
    const title = participationsPaused
      ? 'Abrir inscrições'
      : 'Pausar inscrições';
    const text = participationsPaused
      ? 'Deseja abrir esta ação para novas inscrições?'
      : 'Desejar pausar novas inscrições para esta ação?';
    Alert.alert(title, text, [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      { text: 'Confirmar', onPress: () => setParticipationsPaused((p) => !p) },
    ]);
  }, [participationsPaused]);

  return (
    <View style={[styles.container, style]} {...rest}>
      {canceled && (
        <View style={styles.canceledBadge}>
          <Feather name="alert-circle" size={18} />
          <View style={styles.column}>
            <Text style={styles.canceledBadgeText}>Ação cancelada.</Text>
            <Text style={styles.canceledBadgeReason}>
              &quot;{canceled}&quot;
            </Text>
          </View>
        </View>
      )}
      <View style={[styles.row, { marginBottom: 17 }]}>
        <Image source={{ uri: imgUrl }} style={styles.actionImg} />
        <View style={styles.column}>
          <Text style={styles.actionName}>{name}</Text>
          <IconText>{distanceInMeters / 1000}km</IconText>
        </View>
      </View>
      {!canceled && (
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
      )}
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
      {editable && !canceled && (
        <View style={styles.optionsContainer}>
          <View style={styles.row}>
            <TouchableWithoutFeedback
              style={styles.cancelButton}
              onPress={onCancelAction ? () => onCancelAction(data) : NO_OP}
            >
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback style={styles.editButton}>
              <Text style={styles.editButtonText}>Editar</Text>
            </TouchableWithoutFeedback>
          </View>
          <TouchableWithoutFeedback
            onPress={togglePause}
            style={[
              styles.pauseButton,
              participationsPaused
                ? { backgroundColor: theme.colors.primary }
                : {},
            ]}
          >
            <Text
              style={[
                styles.pauseButtonText,
                participationsPaused ? { color: '#fff' } : {},
              ]}
            >
              {!participationsPaused
                ? 'Pausar novas inscrições'
                : 'Reabrir para inscrições'}
            </Text>
          </TouchableWithoutFeedback>
        </View>
      )}
    </View>
  );
};
