import React, { FC } from 'react';
import { View, ViewStyle } from 'react-native';

import { styles } from './styles';

interface Props {
  style?: ViewStyle;
}

export const Divider: FC<Props> = ({ style }) => (
  <View style={[styles.container, style]} />
);
