import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '@screens/Home';
import { Action } from '@screens/Action';
import { EditProfile } from '@screens/EditProfile';
import { Picker } from '@screens/Picker';
import { AppRoutesParamList } from '@ts/routes/AppRoutes';

const { Navigator, Screen } = createStackNavigator<AppRoutesParamList>();

export const AppRoutes: React.FC = () => (
  <>
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Action" component={Action} />
      <Screen name="EditProfile" component={EditProfile} />
      <Screen name="Picker" component={Picker} />
    </Navigator>
  </>
);
