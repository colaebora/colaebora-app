import { FloatingButton } from '@components/Buttons/FloatingButton';
import React, { useCallback, useMemo } from 'react';
import { Alert, KeyboardAvoidingView, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme } from '@globals/styles/theme';
import { useHeaderHeight } from '@react-navigation/stack';

import { ProfilePicture } from '@components/Layout/ProfilePicture';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { useAuth } from '@hooks/useAuth';
import { HeaderText } from '@components/Layout/HeaderText';
import { TextField } from '@components/Fields/TextField';
import { Formik } from 'formik';
import { PickerField } from '@components/Fields/PickerField';
import { GENDER_OPTIONS } from '@constants/genders';
import { TelephoneInput } from '@components/Fields/TelephoneField';
import { INTEREST_OPTIONS } from '@constants/interests';
import { styles } from './style';
import { Gender } from '../../@types/enums/Gender';

type EditProfileFormSchema = {
  bio: string;
  location: string;
  interests: string[];
  email: string;
  phone: string;
  gender: Gender | null;
};

export const EditProfile: React.FC = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const headerHeight = useHeaderHeight();

  const initialValues: EditProfileFormSchema = useMemo(
    () => ({
      bio: '',
      location: '',
      interests: [],
      email: '',
      phone: '',
      gender: null,
    }),
    []
  );

  const handleFinish = useCallback((data: EditProfileFormSchema) => {
    Alert.alert(JSON.stringify(data, null, 2));
    console.log({ data });
  }, []);

  if (!user) {
    navigation.goBack();
    return <></>;
  }

  return (
    <Formik formik onSubmit={handleFinish} initialValues={initialValues}>
      {({ handleSubmit, values, handleBlur, handleChange, setFieldValue }) => (
        <KeyboardAvoidingView
          style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}
          behavior="padding"
          enabled
          keyboardVerticalOffset={headerHeight}
        >
          <ScrollView style={styles.container}>
            <FloatingButton
              Icon={() => (
                <Feather
                  name="arrow-left"
                  size={24}
                  color={theme.colors.primary}
                />
              )}
              onPress={() => navigation.goBack()}
            />
            <HeaderText>Editar Perfil</HeaderText>
            <FloatingButton
              right
              styles={{
                container: {
                  borderColor: theme.colors.successGreen,
                  borderWidth: 1,
                },
              }}
              Icon={() => (
                <Feather
                  name="check"
                  size={24}
                  color={theme.colors.successGreen}
                />
              )}
              onPress={() => handleSubmit()}
            />
            <View style={styles.header}>
              <ProfilePicture source={{ uri: user.photo }} />
              <Text style={styles.editPhoto}>Alterar foto do perfil</Text>
            </View>
            <View style={styles.body}>
              <TextField
                label="Sobre o voluntário"
                placeholder="Escreva um pouco sobre você!"
                value={values.bio}
                onBlur={handleBlur('bio')}
                onChangeText={handleChange('bio')}
              />
              <TextField
                label="Localização"
                placeholder="Como vai ser esse campo?"
                value={values.location}
                onBlur={handleBlur('location')}
                onChangeText={handleChange('location')}
              />
              <PickerField
                label="Interesses"
                options={INTEREST_OPTIONS}
                placeholder="Selecione seus interesses"
                value={values.interests}
                onChange={(v: string[]) => setFieldValue('interests', v)}
                multiple
              />
              <TextField
                label="E-mail"
                placeholder="seuemail@email.com"
                keyboardType="email-address"
                value={values.email}
                onBlur={handleBlur('email')}
                onChangeText={handleChange('email')}
              />
              <TelephoneInput
                label="Telefone"
                keyboardType="phone-pad"
                textContentType="telephoneNumber"
                placeholder="Fazer TelephoneInput"
                maxLength={16}
                value={values.phone}
                onBlur={handleBlur('phone')}
                onChange={handleChange('phone')}
              />
              <PickerField
                label="Gênero"
                options={GENDER_OPTIONS}
                placeholder="Selecione seu gênero"
                value={values.gender}
                onChange={handleChange('gender')}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};