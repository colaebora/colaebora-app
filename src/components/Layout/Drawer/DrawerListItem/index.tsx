import React, { FC, ReactNode } from 'react';
import { View, ViewProps, Text } from 'react-native';
import { styles } from './style';

type Props = ViewProps & {
  icon: ReactNode;
  title: string;
};

export const DrawerListItem: FC<Props> = ({ icon, title, ...rest }) => (
  <View style={styles.container} {...rest}>
    {icon ?? null}
    {title ? <Text style={styles.title}>{title}</Text> : null}
  </View>
);
