import { TextField } from '@components/Fields/TextField';
import { theme } from '@globals/styles/theme';
import { colaClient } from '@services/client';
import { RegisterVolunteerSchema } from '@ts/forms/RegisterVolumeSchema';
import { Formik } from 'formik';
import React from 'react';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import reactotron from 'reactotron-react-native';
import * as Yup from 'yup';

type RegisterScreenProps = {
  googleToken?: string;
  volunteer?: RegisterVolunteerSchema;
  route: any;
};
export const RegisterScreen: React.FC<RegisterScreenProps> = ({
  route,
  volunteer,
}) => {
  const confirmRegisterSchema = Yup.object().shape({
    name: Yup.string().required('Insira um nome!'),
    document: Yup.string().required('Insira seu CPF!'),
    personType: Yup.string().required('Insira seu tipo de pessoa!'),
    about: Yup.string().required('Insira algumas informações sobre você!'),
    phoneNumber: Yup.string().required('Insira seu telefone!'),
    city: Yup.string().required('Insira sua cidade!'),
  });
  const { token } = route.params;
  reactotron.logImportant!!({ googleToken: token });
  const navigation = useNavigation();
  const handleRegister = async (values: RegisterVolunteerSchema) => {
    try {
      const { name, document, personType, about, phoneNumber, city } = values;
      const volunteer = {
        name,
        document,
        personType,
        about,
        phoneNumber,
        city,
      };
      const response = await colaClient.post(
        `auth/volunteer/register/${token}`,
        volunteer
      );
      navigation.navigate('Home');
      return response;
    } catch (error) {
      reactotron.log!!(error, 'error');
    }
  };
  return (
    <Formik
      onSubmit={handleRegister}
      validationSchema={confirmRegisterSchema}
      initialValues={{
        name: volunteer?.name || '',
        document: volunteer?.document || '',
        personType: volunteer?.personType || 1,
        about: volunteer?.about || '',
        phoneNumber: volunteer?.phoneNumber || '',
        city: volunteer?.city || '',
      }}
    >
      {({ handleSubmit, values, handleBlur, handleChange, errors }) => (
        <ScrollView>
          <KeyboardAvoidingView
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            behavior="padding"
            enabled
          >
            <View>
              {/* <FloatingButton
              Icon={() => (
                <Feather
                  name="arrow-left"
                  size={24}
                  color={theme.colors.primary}
                />
              )}
              onPress={() => {}}
            /> */}
              <View>
                <TextField
                  label="Nome"
                  placeholder="Escreva seu nome"
                  value={values.name}
                  onBlur={handleBlur('name')}
                  onChangeText={handleChange('name')}
                  error={errors.name}
                />
                <TextField
                  label="CPF"
                  placeholder="Escreva seu CPF"
                  value={values.document}
                  onBlur={handleBlur('document')}
                  onChangeText={handleChange('document')}
                  error={errors.document}
                />
                <TextField
                  label="Sobre você"
                  placeholder="Escreva algumas informações sobre você"
                  value={values.about}
                  onBlur={handleBlur('about')}
                  onChangeText={handleChange('about')}
                  error={errors.about}
                />
                <TextField
                  label="Telefone"
                  placeholder="Escreva seu telefone de contato"
                  value={values.phoneNumber}
                  onBlur={handleBlur('phoneNumber')}
                  onChangeText={handleChange('phoneNumber')}
                  error={errors.phoneNumber}
                />
                <TextField
                  label="Cidade"
                  placeholder="Escreva sua cidade"
                  value={values.city}
                  onBlur={handleBlur('city')}
                  onChangeText={handleChange('city')}
                  error={errors.city}
                />
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    handleSubmit();
                  }}
                >
                  <Text
                    style={{
                      color: theme.colors.primary,
                      fontSize: 24,
                      fontWeight: 'bold',
                    }}
                  >
                    Confirmar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      )}
    </Formik>
  );
};
