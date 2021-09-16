import React, { FC } from 'react';
import { Text, TextProps } from 'react-native';
import { styles } from './style';

type Props = TextProps;

export const HeaderText: FC<Props> = ({ children, style, ...props }) => (
  <Text {...props} style={[styles.headerText, style]}>
    {children}
  </Text>
);
