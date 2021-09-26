import React, { FC } from 'react';
import {
  ViewStyle,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { styleSheet } from './style';

interface Props extends TouchableOpacityProps {
  Icon?: FC;
  text?: string;
  styles?: { container?: ViewStyle; text?: ViewStyle };
}

export const PrimaryButton: FC<Props> = ({ Icon, text, styles, ...rest }) => (
  <TouchableOpacity style={[styleSheet.container, styles?.container]} {...rest}>
    {Icon && <Icon />}
    <Text style={[styleSheet.text, styles?.text]}>{text}</Text>
  </TouchableOpacity>
);
