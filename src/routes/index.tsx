import { useAuth } from '@hooks/useAuth';
import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
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
