import React, { FC } from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { styles } from './style';

type Props = {
  label: string;
  value: string;
  checked: boolean;
  onCheck: (s: string) => void;
  style?: ViewStyle;
};

export const RadioField: FC<Props> = ({
  checked,
  label,
  value,
  onCheck,
  style,
}) => (
  <View
    style={[styles.container, style]}
    onTouchEndCapture={() => onCheck(value)}
  >
    <View style={styles.checkbox}>
      {checked && <View style={styles.checked} />}
    </View>
    <Text style={styles.label}>{label}</Text>
  </View>
);
