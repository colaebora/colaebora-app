import { FloatingButton } from '@components/Buttons/FloatingButton';
import React, { useCallback, useMemo } from 'react';
import { Alert, KeyboardAvoidingView, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme } from '@globals/styles/theme';
import { StackScreenProps, useHeaderHeight } from '@react-navigation/stack';

import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderText } from '@components/Layout/HeaderText';
import { TextField } from '@components/Fields/TextField';
import { Formik } from 'formik';
import { PickerField } from '@components/Fields/PickerField';
import { TelephoneInput } from '@components/Fields/TelephoneField';
import { INTEREST_OPTIONS } from '@constants/interests';
import * as Yup from 'yup';
import { AppRoutesParamList } from '@ts/routes/AppRoutes';
import { ActionFormSchema } from '@ts/forms/ActionFormSchema';
import { ACTION_FREQUENCIES } from '@constants/actionFrequencies';
import { ActionBannerPicker } from '@components/Fields/ActionBannerPicker';
import { PrimaryButton } from '@components/Buttons/PrimaryButton';
import { ActionDatePicker } from '@components/Fields/ActionDatePicker';
import { ActionDatetime } from '@ts/entities/Action';
import { AddressField } from '@components/Fields/AddressField';
import { styles } from './style';

type Props = StackScreenProps<AppRoutesParamList, 'ActionForm'>;

export const ActionForm: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();

  const action = route.params?.action;

  const initialValues: ActionFormSchema = useMemo(
    () => ({
      id: action?.id ?? '',
      name: action?.name ?? '',
      about: action?.about ?? '',
      categories: action?.categories ?? [],
      location: action?.location ?? null,
      date: action?.date ?? null,
      phone: action?.phone ?? '',
      document: action?.document ?? '',
    }),
    [action]
  );

  const actionFormSchema = Yup.object().shape({
    id: Yup.string().optional(),
    name: Yup.string().required('Dê um nome para sua ação!'),
    about: Yup.string().required('Descreva sua ação!'),
    categories: Yup.array()
      .min(1, 'Selecione ao menos uma categoria!')
      .required('Selecione ao menos uma categoria!'),
    location: Yup.object({
      street: Yup.string().required('Insira uma localização válida.'),
      number: Yup.string().required('Insira uma localização válida.'),
      latLng: Yup.object({
        latitude: Yup.string().required('Insira uma localização válida.'),
        longitude: Yup.string().required('Insira uma localização válida.'),
      }),
    })
      .optional()
      .nullable(true),
    date: Yup.object({
      date: Yup.string()
        .test(
          'Future date',
          'A data não pode ser anterior a hoje.',
          // eslint-disable-next-line prefer-arrow-callback, func-names
          function (str?: string): boolean {
            return Boolean(
              str && new Date(str).getTime() > new Date().getTime()
            );
          }
        )
        .required('Insira uma data válida.'),
      frequency: Yup.string()
        .oneOf(ACTION_FREQUENCIES)
        .required('Insira uma data válida.'),
    })
      .nullable(true)
      .required('Informe a data da sua ação!'),
    phone: Yup.string()
      .length(11, 'Insira um telefone válido!')
      .required('Insira seu telefone!'),
    document: Yup.string().required(
      'Preencha o CPF ou CNPJ do(a) organizador(a).'
    ),
  });

  const handleFinish = useCallback((data: ActionFormSchema) => {
    Alert.alert(JSON.stringify(data, null, 2));
  }, []);

  return (
    <Formik
      formik
      onSubmit={handleFinish}
      validationSchema={actionFormSchema}
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
            <HeaderText>{action ? 'Editar ação' : 'Criar uma ação'}</HeaderText>
            <View style={styles.header} />
            <View style={styles.body}>
              {/* TODO */}
              <ActionBannerPicker />
              <TextField
                label="Nome da ação"
                placeholder="Digite o nome da sua ação"
                value={values.name}
                onBlur={handleBlur('name')}
                onChangeText={handleChange('name')}
                error={errors.name}
                required
              />
              <TextField
                label="Sobre"
                placeholder="Fale sobre a sua ação (objetivos, necessidades)..."
                value={values.about}
                onBlur={handleBlur('about')}
                onChangeText={handleChange('about')}
                error={errors.about}
                required
              />
              <PickerField
                label="Categorias"
                options={INTEREST_OPTIONS}
                placeholder="Selecione as categorias"
                value={values.categories}
                onChange={(v: string[]) =>
                  setFieldValue('categories', v, false)
                }
                error={errors.categories as string}
                required
                multiple
              />
              <AddressField
                label="Localização"
                placeholder="Insira a localização da ação"
                value={values.location}
                onChange={(a) => setFieldValue('location', a, false)}
                required
                error={errors.location}
              />
              <ActionDatePicker
                label="Dia da ação"
                placeholder="Selecione o dia da sua ação"
                value={values.date}
                onChange={(v: ActionDatetime) => {
                  setFieldValue('date', v, false);
                }}
                error={errors.date}
                required
              />
              <TelephoneInput
                label="Telefone"
                keyboardType="phone-pad"
                textContentType="telephoneNumber"
                placeholder="Telefone do responsável pela ação"
                maxLength={16}
                value={values.phone}
                onBlur={handleBlur('phone')}
                onChange={handleChange('phone')}
                error={errors.phone}
                required
              />
              <TextField
                label="CPF/CNPJ"
                placeholder="Quem organiza a ação?"
                value={values.document}
                onBlur={handleBlur('document')}
                onChangeText={handleChange('document')}
                error={errors.document}
                required
              />
              <PrimaryButton
                text="Quero criar a ação"
                styles={{ container: { marginTop: 15 } }}
                onPress={() => handleSubmit()}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};
