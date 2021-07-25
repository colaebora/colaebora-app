import React from 'react';
import { ViewStyle, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

interface FloatingButtonProps {
  Icon?: React.FC;
  text?: string;
  style?: { container?: ViewStyle; text?: ViewStyle };
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({
  Icon,
  text,
  style,
  ...rest
}: FloatingButtonProps) => (
  <TouchableOpacity style={[styles.container, style?.container]} {...rest}>
    {Icon && <Icon />}
    {text && <Text style={[styles.text, style?.text]}>{text}</Text>}
  </TouchableOpacity>
);
