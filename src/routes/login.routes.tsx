import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '@screens/Login';

const { Navigator, Screen } = createStackNavigator();

export const LoginRoutes: React.FC = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Login"
  >
    <Screen name="Login" component={Login} />
  </Navigator>
);
