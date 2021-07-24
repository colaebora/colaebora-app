import React from 'react';
import { View, TextInput } from 'react-native';
import SearchSvg from '@assets/icons/search.svg';
import { BorderlessButton } from 'react-native-gesture-handler';
import { theme } from '@globals/styles/theme';
import { styles } from './style';

interface Props {
  value: string;
  set: (v: string) => void;
  callback: () => void;
}

export const SearchField: React.FC<Props> = ({
  value,
  set,
  callback,
}: Props) => {
  const onChange = (v: string) => set(v);
  const search = () => callback();

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="Buscar ONG, ação, voluntário..."
        style={styles.input}
        placeholderTextColor={theme.colors.lightText}
      />
      <BorderlessButton onPress={search} style={styles.button}>
        <SearchSvg height={24} width={24} />
      </BorderlessButton>
    </View>
  );
};
