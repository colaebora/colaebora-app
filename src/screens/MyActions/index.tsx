import { FloatingButton } from '@components/Buttons/FloatingButton';
import React, { useCallback, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme } from '@globals/styles/theme';

import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '@globals/styles/global';
import { ScrollView } from 'react-native-gesture-handler';
import { sampleActions } from '@globals/constants/temp';
import { ActionCard } from '@components/Layout/ActionCard';
import { HeaderText } from '@components/Layout/HeaderText';
import { Action } from '@ts/entities/Action';
import { styles } from './style';

export const MyActions: React.FC = () => {
  const navigation = useNavigation();

  const [current, setCurrent] = useState(sampleActions);
  const [past, setPast] = useState(sampleActions);

  // This is a quick hack job, rewrite this later
  const cancel = useCallback((action: Action) => {
    Alert.alert(
      'Cancelar ação',
      'Deseja cancelar esta ação? Isso não poderá ser desfeito.',
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim, desejo cancelar',
          onPress: () =>
            Alert.prompt(
              'Motivo',
              'Digite o motivo do cancelamento da ação. Esta informação será enviada aos particpantes inscritos.',
              [
                {
                  text: 'Voltar',
                  style: 'cancel',
                },
                {
                  text: 'Enviar',
                  onPress: (text?: string) => {
                    setCurrent((c) => c.filter((a) => a.id !== action.id));
                    setPast((p) => [{ ...action, canceled: text }, ...p]);
                  },
                },
              ]
            ),
        },
      ]
    );
  }, []);

  return (
    <ScrollView style={styles.container}>
      <FloatingButton
        Icon={() => (
          <Feather name="arrow-left" size={24} color={theme.colors.primary} />
        )}
        onPress={() => navigation.goBack()}
      />
      <HeaderText>Ações organizadas</HeaderText>
      <View style={styles.body}>
        <Text style={globalStyles.title}>Presentes</Text>
        {current.map((a) => (
          <ActionCard
            data={a}
            style={{ marginBottom: 12 }}
            editable
            onCancelAction={cancel}
          />
        ))}
        <Text style={[globalStyles.title, { marginTop: 18 }]}>Anteriores</Text>
        {past.map((a) => (
          <ActionCard data={a} past />
        ))}
      </View>
    </ScrollView>
  );
};
