import { Feather } from '@expo/vector-icons';
import React, { FC, PropsWithChildren } from 'react';
import { View, ViewProps, Text, TextStyle } from 'react-native';
import { styles } from './styles';

type Props = PropsWithChildren<ViewProps> & {
  textStyle?: TextStyle;
};

export const Location: FC<Props> = ({
  children,
  style,
  textStyle,
  ...rest
}: Props) => (
  <View style={[styles.row, style]} {...rest}>
    <Feather name="map-pin" size={11} />
    <Text style={[styles.distance, textStyle]}>{children}</Text>
  </View>
);
