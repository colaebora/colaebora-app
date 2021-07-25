import React from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { styles } from './style';

interface CategoryBubbleProps {
  name: string;
  style?: ViewStyle;
}

export const CategoryBubble: React.FC<CategoryBubbleProps> = ({
  name,
  style,
}: CategoryBubbleProps) => (
  <View style={[styles.container, style]}>
    <Text style={styles.text}>{name}</Text>
  </View>
);
