import { Feather } from '@expo/vector-icons';
import { theme } from '@globals/styles/theme';
import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

export const ActionBannerPicker: FC = () => (
  <View style={styles.container}>
    <Feather name="camera" size={18} color={theme.colors.primaryText} />
    <Text style={styles.text}>Adicionar foto da ação</Text>
  </View>
);
