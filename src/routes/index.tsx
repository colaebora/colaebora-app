import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '@hooks/useAuth';
import { AppRoutes } from './app.routes';
import { LoginRoutes } from './login.routes';

export const Routes: FC = () => {
  const { isInsideApp } = useAuth();
  return (
    <NavigationContainer>
      {isInsideApp ? <AppRoutes /> : <LoginRoutes />}
    </NavigationContainer>
  );
};
