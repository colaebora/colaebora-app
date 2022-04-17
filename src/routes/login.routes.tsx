import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '@screens/Login';
import { RegisterScreen } from '@screens/RegisterScreen';
import React from 'react';

const { Navigator, Screen } = createStackNavigator();

export const LoginRoutes: React.FC = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Login"
  >
    <Screen name="Login" component={Login} />
    <Screen name="RegisterScreen" component={RegisterScreen} />
  </Navigator>
);
