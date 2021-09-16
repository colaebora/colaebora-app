import { FloatingButton } from '@components/Buttons/FloatingButton';
import React, { useCallback } from 'react';
import { TouchableOpacity, View, Text, LogBox } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme } from '@globals/styles/theme';

import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { HeaderText } from '@components/Layout/HeaderText';
import { StackScreenProps } from '@react-navigation/stack';
import { AppRoutesParamList } from '@ts/routes/AppRoutes';
import { Option } from '@ts/entities/Option';
import { styles } from './style';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

// TODO add screen param typing
// https://reactnavigation.org/docs/typescript#type-checking-screens

type Props = StackScreenProps<AppRoutesParamList, 'Picker'>;

export const Picker: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation();

  const {
    onChange: parentOnChange,
    title,
    options,
    value,
    multiple,
  } = route.params;

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onChange = useCallback(
    (v: string[] | string) => {
      if (parentOnChange) {
        navigation.setParams({ ...route.params, value: v });
        parentOnChange(v);
      }
    },
    [navigation, parentOnChange, route.params]
  );

  const isSelected = useCallback(
    (op: Option): boolean => {
      if (multiple === true) {
        const _value = value as string[];
        return _value.some((o) => op.value === o);
      }
      const _value = value as string;
      return _value === op.value;
    },
    [multiple, value]
  );

  const handleChange = useCallback(
    (item: Option): void => {
      if (!onChange) return;
      if (multiple === true) {
        if (!value) {
          onChange([item.value]);
          return;
        }

        const _value = value as string[];

        if (isSelected(item)) {
          const idx = _value.findIndex((o) => o === item.value);
          const newValue = Array.from(_value);
          newValue.splice(idx, 1);
          onChange(newValue);
          return;
        }

        const newValue = Array.from(_value);
        newValue.push(`${item.value}`);
        onChange(newValue);
      } else {
        onChange(`${item.value}`);
        goBack();
      }
    },
    [isSelected, multiple, goBack, onChange, value]
  );

  return (
    <View style={styles.container}>
      <FloatingButton
        Icon={() => (
          <Feather name="arrow-left" size={24} color={theme.colors.primary} />
        )}
        onPress={() => goBack()}
      />
      <HeaderText>{title}</HeaderText>
      <FlatList
        data={options}
        contentContainerStyle={styles.body}
        ListHeaderComponent={() => <View style={styles.listHeader} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListFooterComponent={() => <View style={styles.separator} />}
        keyExtractor={(o) => `${o.value}`}
        renderItem={({ item }: { item: Option }) => (
          <TouchableOpacity
            style={styles.option}
            onPress={() => handleChange(item)}
          >
            <Text style={styles.optionLabel}>{item.label ?? item.value}</Text>
            {isSelected(item) && (
              <Feather name="check" size={20} color={theme.colors.primary} />
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
