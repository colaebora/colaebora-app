import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '@screens/Home';
import { Action } from '@screens/Action';

const { Navigator, Screen } = createStackNavigator();

export const AppRoutes: React.FC = () => (
  <>
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Action" component={Action} />
    </Navigator>
  </>
);
