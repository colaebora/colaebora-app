import React from 'react';
import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { theme } from '@globals/styles/theme';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { BottomSheetTextInputProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetTextInput';
import { styles } from './style';

type Props = BottomSheetTextInputProps & {
  value: string;
  set: (v: string) => void;
  callback: () => void;
};

export const SearchField: React.FC<Props> = ({
  value,
  set,
  callback,
  ...rest
}: Props) => {
  const onChange = (v: string) => set(v);
  const search = () => callback();

  return (
    <View style={styles.container}>
      <BottomSheetTextInput
        value={value}
        onChangeText={onChange}
        placeholder="Buscar ONG, ação, voluntário..."
        style={styles.input}
        placeholderTextColor={theme.colors.lightText}
        {...rest}
      />
      <BorderlessButton onPress={search} style={styles.button}>
        <Feather name="search" size={18} color={theme.colors.lightText} />
      </BorderlessButton>
    </View>
  );
};
