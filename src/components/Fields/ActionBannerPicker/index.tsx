import { Feather } from '@expo/vector-icons';
import { theme } from '@globals/styles/theme';
import React, { FC, useCallback } from 'react';
import { Alert, Image, Text, View } from 'react-native';
import * as ExpoImagePicker from 'expo-image-picker';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { ProfilePicture } from '@components/Layout/ProfilePicture';
import { styles } from './style';

interface Props {
  placeholder?: string;
  onChange: (uri: string) => void;
  value?: string;
}

export const ImagePicker: FC<Props> = ({ placeholder, onChange, value }) => {
  const pickImage = useCallback(async () => {
    const result = await ExpoImagePicker.launchImageLibraryAsync({
      mediaTypes: ExpoImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      if (onChange) onChange(result.uri);
    }
  }, [onChange]);

  return value ? (
    <TouchableWithoutFeedback
      style={styles.filledContainer}
      onPress={pickImage}
    >
      <ProfilePicture source={{ uri: value }} />
      <Text style={styles.editIndicator}>Alterar foto</Text>
    </TouchableWithoutFeedback>
  ) : (
    <TouchableWithoutFeedback style={styles.container} onPress={pickImage}>
      <Feather name="camera" size={18} color={theme.colors.primaryText} />
      <Text style={styles.text}>{placeholder}</Text>
    </TouchableWithoutFeedback>
  );
};
