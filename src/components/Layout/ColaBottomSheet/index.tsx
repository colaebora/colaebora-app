import BottomSheet, { BottomSheetProps } from '@gorhom/bottom-sheet';
import React, { ReactElement, Ref, useState } from 'react';
import { Alert, Text } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

type Props = BottomSheetProps & {
  sheetRef: Ref<BottomSheet>;
};

export const ColaBottomSheet = ({
  children,
  sheetRef,
  ...rest
}: Props): ReactElement => {
  // TODOD clear - experimenting
  const animatedPosition = useSharedValue<number>(0);
  const a = () => Alert.alert(`${animatedPosition.value}`);

  const [position, setPosition] = useState(animatedPosition.value);

  return (
    <BottomSheet
      ref={sheetRef}
      animatedIndex={animatedPosition}
      onChange={setPosition}
      keyboardBehavior="extend"
      keyboardBlurBehavior="restore"
      {...rest}
    >
      {/* <Text>{position}</Text> */}
      {children}
    </BottomSheet>
  );
};
