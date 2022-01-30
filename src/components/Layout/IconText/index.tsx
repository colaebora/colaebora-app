import { Feather } from '@expo/vector-icons';
import React, { FC, PropsWithChildren } from 'react';
import { View, ViewProps, Text, TextStyle } from 'react-native';
import { styles } from './styles';

type Props = PropsWithChildren<ViewProps> & {
  textStyle?: TextStyle;
  icon?: React.ReactNode;
};

export const IconText: FC<Props> = ({
  children,
  style,
  textStyle,
  icon,
  ...rest
}: Props) => (
  <View style={[styles.row, style]} {...rest}>
    {icon || <Feather name="map-pin" size={11} />}
    <Text style={[styles.text, textStyle]}>{children}</Text>
  </View>
);
