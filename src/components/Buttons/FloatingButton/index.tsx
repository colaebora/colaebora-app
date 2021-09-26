import React from 'react';
import {
  TouchableOpacityProps,
  ViewStyle,
  Text,
  TouchableOpacity,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { styleSheet } from './style';

interface FloatingButtonProps extends TouchableOpacityProps {
  Icon?: React.FC;
  text?: string;
  styles?: { container?: ViewStyle; text?: ViewStyle };
  bottom?: boolean;
  right?: boolean;
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({
  Icon,
  text,
  styles,
  bottom,
  right,
  ...rest
}: FloatingButtonProps) => {
  const propVerticalStyle: ViewStyle = !bottom
    ? { top: getStatusBarHeight() + 15 }
    : { bottom: 32 };
  const propHorizontalStyle: ViewStyle = !right ? { left: 15 } : { right: 15 };
  return (
    <TouchableOpacity
      style={[
        styleSheet.container,
        propVerticalStyle,
        propHorizontalStyle,
        styles?.container,
      ]}
      {...rest}
    >
      {Icon && <Icon />}
      {text && <Text style={[styleSheet.text, styles?.text]}>{text}</Text>}
    </TouchableOpacity>
  );
};
