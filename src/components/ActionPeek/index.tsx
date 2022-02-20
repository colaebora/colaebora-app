import React, { FC, useEffect, useMemo } from 'react';

import { View, Dimensions, Text } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Action } from '@ts/entities/Action';
import { ProfilePicture } from '@components/Layout/ProfilePicture';
import { FloatingButton } from '@components/Buttons/FloatingButton';
import { Feather } from '@expo/vector-icons';
import { theme } from '@globals/styles/theme';
import { IconText } from '@components/Layout/IconText';
import { globalStyles } from '@globals/styles/global';
import { LimitedText } from '@components/Layout/LimitedText';
import { NO_OP } from '@globals/utils/noOp';
import { styles } from './style';

const { height } = Dimensions.get('window');

interface Props {
  isOpen: boolean;
  data?: Action | null;
  onClose?: () => void;
  onDetailsClick?: (data: Action) => void;
}

export const ActionPeek: FC<Props> = ({
  isOpen,
  data,
  onClose,
  onDetailsClick,
}) => {
  const PICTURE_HEIGHT_OFFSET = useMemo(() => 70, []);
  const MAX_DRAWER_HEIGHT = useMemo(() => height * 0.4, []);
  const DRAWER_HIDDEN_Y_VALUE = useMemo(
    () => MAX_DRAWER_HEIGHT + PICTURE_HEIGHT_OFFSET + 100,
    [MAX_DRAWER_HEIGHT, PICTURE_HEIGHT_OFFSET]
  );
  const drawerPosY = useSharedValue(DRAWER_HIDDEN_Y_VALUE);

  const drawerAnimStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: drawerPosY.value }],
  }));

  const overlayAnimStyle = useAnimatedStyle(() => ({
    opacity: interpolate(drawerPosY.value, [DRAWER_HIDDEN_Y_VALUE, 0], [0, 1]),
  }));

  useEffect(() => {
    if (isOpen) {
      drawerPosY.value = withTiming(0, {
        duration: 650,
        easing: Easing.out(Easing.exp),
      });
    } else {
      drawerPosY.value = withTiming(DRAWER_HIDDEN_Y_VALUE, {
        duration: 650,
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
        onTouchStart={onClose}
      />
      <Animated.View style={[styles.container, drawerAnimStyle]}>
        <View style={styles.header}>
          <FloatingButton
            Icon={() => (
              <Feather
                name="chevron-down"
                size={24}
                color={theme.colors.primary}
              />
            )}
            onPress={onClose}
            styles={{
              container: {
                top: 15,
              },
            }}
          />
          <View
            style={{
              height: 60,
              maxHeight: MAX_DRAWER_HEIGHT,
              transform: [{ translateY: -PICTURE_HEIGHT_OFFSET }],
            }}
          >
            <ProfilePicture source={{ uri: data?.imgUrl }} />
          </View>
          <Text style={[globalStyles.title, { textAlign: 'center' }]}>
            {data?.name}
          </Text>
          <View style={styles.row}>
            <IconText
              icon={
                <Feather name="globe" color={theme.colors.gray} size={16} />
              }
            >
              {data?.organization.name}
            </IconText>
            <IconText
              icon={
                <Feather name="globe" color={theme.colors.gray} size={16} />
              }
            >
              {data?.location.city} - {data?.location.state}
            </IconText>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={globalStyles.title}>Sobre a ação</Text>
          <LimitedText
            style={globalStyles.text}
            limit={100}
            onReadMore={
              onDetailsClick ? () => onDetailsClick(data as Action) : NO_OP
            }
            forceReadMore
          >
            {data?.about ?? ''}
          </LimitedText>
        </View>
      </Animated.View>
    </View>
  );
};
