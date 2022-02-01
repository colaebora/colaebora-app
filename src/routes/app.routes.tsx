import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '@screens/Home';
import { Organization } from '@screens/Organization';
import { EditProfile } from '@screens/EditProfile';
import { Picker } from '@screens/Picker';
import { AppRoutesParamList } from '@ts/routes/AppRoutes';
import { ActionForm } from '@screens/CreateAction';
import { AddressWizardPartOne } from '@screens/AddressWizard/Part1';
import { AddressWizardPartTwo } from '@screens/AddressWizard/Part2';
import { AddressWizardPartThree } from '@screens/AddressWizard/Part3';

const { Navigator, Screen } = createStackNavigator<AppRoutesParamList>();

export const AppRoutes: React.FC = () => (
  <>
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Organization" component={Organization} />
      <Screen name="EditProfile" component={EditProfile} />
      <Screen name="ActionForm" component={ActionForm} />
      <Screen name="Picker" component={Picker} />

      <Screen name="AddressWizardPartOne" component={AddressWizardPartOne} />
      <Screen name="AddressWizardPartTwo" component={AddressWizardPartTwo} />
      <Screen
        name="AddressWizardPartThree"
        component={AddressWizardPartThree}
      />
    </Navigator>
  </>
);
