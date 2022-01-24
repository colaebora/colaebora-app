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
import * as Yup from 'yup';
import { EditProfileFormSchema } from '@ts/forms/EditProfileFormSchema';
import { AddressField } from '@components/Fields/AddressField';
import { EMPTY_ADDRESS } from '@hooks/useAddressWIzard';
import { styles } from './style';

export const EditProfile: React.FC = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const headerHeight = useHeaderHeight();

  const initialValues: EditProfileFormSchema = useMemo(
    () => ({
      bio: user?.bio ?? '',
      address: user?.address ?? EMPTY_ADDRESS,
      interests: user?.interests ?? [],
      email: user?.email ?? '',
      phone: user?.phone ?? '',
      gender: user?.gender ?? null,
    }),
    [user]
  );

  const editProfileSchema = Yup.object().shape({
    bio: Yup.string().optional(),
    address: Yup.object().required('Insira sua localização!'),
    email: Yup.string()
      .email('Insira um e-mail válido!')
      .required('Insira seu e-mail!'),
    phone: Yup.string()
      .length(11, 'Insira um telefone válido!')
      .required('Insira seu telefone!'),
    gender: Yup.string().required('Insira seu gênero!').nullable(true),
    interests: Yup.array()
      .min(1, 'Selecione ao menos um interesse!')
      .required('Selecione ao menos um interesse!'),
  });

  const handleFinish = useCallback((data: EditProfileFormSchema) => {
    Alert.alert(JSON.stringify(data, null, 2));
  }, []);

  if (!user) {
    navigation.goBack();
    return <></>;
  }

  return (
    <Formik
      formik
      onSubmit={handleFinish}
      validationSchema={editProfileSchema}
      initialValues={initialValues}
    >
      {({
        handleSubmit,
        values,
        handleBlur,
        handleChange,
        setFieldValue,
        errors,
      }) => (
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
                error={errors.bio}
              />
              <AddressField
                label="Localização"
                placeholder="Insira sua localização..."
                value={values.address}
                onChange={(a) => setFieldValue('address', a, false)}
                required
                error={errors.address}
              />
              <PickerField
                label="Interesses"
                options={INTEREST_OPTIONS}
                placeholder="Selecione seus interesses"
                value={values.interests}
                onChange={(v: string[]) => setFieldValue('interests', v, false)}
                error={errors.interests as string}
                required
                multiple
              />
              <TextField
                label="E-mail"
                placeholder="seuemail@email.com"
                keyboardType="email-address"
                value={values.email}
                onBlur={handleBlur('email')}
                onChangeText={handleChange('email')}
                error={errors.email}
                required
              />
              <TelephoneInput
                label="Telefone"
                keyboardType="phone-pad"
                textContentType="telephoneNumber"
                placeholder="Insira seu telefone"
                maxLength={16}
                value={values.phone}
                onBlur={handleBlur('phone')}
                onChange={handleChange('phone')}
                error={errors.phone}
                required
              />
              <PickerField
                label="Gênero"
                options={GENDER_OPTIONS}
                placeholder="Selecione seu gênero"
                value={values.gender}
                onChange={handleChange('gender')}
                error={errors.gender}
                required
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};
