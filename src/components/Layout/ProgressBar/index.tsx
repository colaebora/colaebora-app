import React from 'react';
import { View, ViewStyle } from 'react-native';
import { styles } from './style';

interface ProgressBarProps {
  value: number;
  total: number;
  style?: ViewStyle;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  total,
  style,
}: ProgressBarProps) => {
  const percentage = (value / total) * 100;

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.filled, { width: `${percentage}%` }]} />
    </View>
  );
};
