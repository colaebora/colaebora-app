import React from 'react';
import {
  TouchableOpacityProps,
  ViewStyle,
  Text,
  TouchableOpacity,
} from 'react-native';
import { styleSheet } from './style';

interface FloatingButtonProps extends TouchableOpacityProps {
  Icon?: React.FC;
  text?: string;
  styles?: { container?: ViewStyle; text?: ViewStyle };
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({
  Icon,
  text,
  styles,
  ...rest
}: FloatingButtonProps) => (
  <TouchableOpacity style={[styleSheet.container, styles?.container]} {...rest}>
    {Icon && <Icon />}
    {text && <Text style={[styleSheet.text, styles?.text]}>{text}</Text>}
  </TouchableOpacity>
);
