import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';

import { View, Dimensions, Text, Modal } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { ActionDatetime } from '@ts/entities/Action';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ActionFrequency } from '@ts/enums/ActionFrequency';
import { RadioField } from '@components/Fields/RadioField';
import { DateField } from '@components/Fields/DateField';
import { ACTION_FREQUENCY_LABELS } from '@constants/actionFrequencies';
import { styles } from './style';

const { height: deviceHeight } = Dimensions.get('window');

type Props = {
  visible: boolean;
  value?: ActionDatetime | null;
  onChange?: (d: ActionDatetime) => void;
  onClose: () => void;
};

export const ActionDatePickerModal: FC<Props> = ({
  visible,
  value,
  onChange,
  onClose,
}) => {
  const [date, setDatetime] = useState(value?.date ?? '');
  const [frequency, setFrequency] = useState(
    value?.frequency ?? ActionFrequency.once
  );

  const handleChange = useCallback(() => {
    if (onChange) onChange({ date, frequency } as ActionDatetime);
    onClose();
  }, [date, frequency, onChange, onClose]);

  const drawerHeight = useMemo(() => deviceHeight * 0.42, []);
  const drawerPosY = useSharedValue(drawerHeight);

  const drawerAnimStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: drawerPosY.value }],
  }));

  const overlayAnimStyle = useAnimatedStyle(() => ({
    opacity: interpolate(drawerPosY.value, [drawerHeight, 0], [0, 1]),
  }));

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      setModalVisible(true);
      drawerPosY.value = withTiming(0, {
        duration: 500,
        easing: Easing.out(Easing.exp),
      });
    } else {
      drawerPosY.value = withTiming(drawerHeight, {
        duration: 500,
        easing: Easing.out(Easing.exp),
      });
      setTimeout(() => setModalVisible(false), 100);
    }
    // eslint-disable-next-line
  }, [visible]);

  return (
    <Modal visible={modalVisible} transparent>
      <Animated.View
        style={[styles.overlay, overlayAnimStyle]}
        onTouchStart={onClose}
      />
      <Animated.View
        style={[styles.container, { height: drawerHeight }, drawerAnimStyle]}
      >
        <Text style={styles.title}>
          Qual será o dia e frequência da sua ação?
        </Text>
        <DateField
          placeholder="Selecione uma data"
          value={date}
          onChange={setDatetime}
          styles={{ container: { marginTop: 10 } }}
        />
        <View style={[styles.row, { marginTop: 16, paddingHorizontal: 12 }]}>
          <View style={[styles.column]}>
            <RadioField
              checked={frequency === ActionFrequency.once}
              value={ActionFrequency.once}
              onCheck={(v) => setFrequency(v as ActionFrequency)}
              label={ACTION_FREQUENCY_LABELS[ActionFrequency.once]}
              style={{ marginBottom: 28 }}
            />
            <RadioField
              checked={frequency === ActionFrequency.fifteenDays}
              value={ActionFrequency.fifteenDays}
              onCheck={(v) => setFrequency(v as ActionFrequency)}
              label={ACTION_FREQUENCY_LABELS[ActionFrequency.fifteenDays]}
            />
          </View>
          <View style={[styles.column]}>
            <RadioField
              checked={frequency === ActionFrequency.sevenDays}
              value={ActionFrequency.sevenDays}
              onCheck={(v) => setFrequency(v as ActionFrequency)}
              label={ACTION_FREQUENCY_LABELS[ActionFrequency.sevenDays]}
              style={{ marginBottom: 28 }}
            />
            <RadioField
              checked={frequency === ActionFrequency.thirtyDays}
              value={ActionFrequency.thirtyDays}
              onCheck={(v) => setFrequency(v as ActionFrequency)}
              label={ACTION_FREQUENCY_LABELS[ActionFrequency.thirtyDays]}
            />
          </View>
        </View>
        <View
          style={[
            styles.row,
            { flex: 1, paddingTop: 10, justifyContent: 'space-around' },
          ]}
        >
          <TouchableOpacity style={styles.finishButton} onPress={onClose}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.finishButton} onPress={handleChange}>
            <Text style={styles.finishText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </Modal>
  );
};
