import { createStackNavigator } from '@react-navigation/stack';
import { Action } from '@screens/Action';
import { AddressWizardPartOne } from '@screens/AddressWizard/Part1';
import { AddressWizardPartTwo } from '@screens/AddressWizard/Part2';
import { AddressWizardPartThree } from '@screens/AddressWizard/Part3';
import { ActionForm } from '@screens/CreateAction';
import { EditProfile } from '@screens/EditProfile';
import { Home } from '@screens/Home';
import { MyActions } from '@screens/MyActions';
import { Organization } from '@screens/Organization';
import { PendingApprovals } from '@screens/PendingApprovals';
import { Picker } from '@screens/Picker';
import { AppRoutesParamList } from '@ts/routes/AppRoutes';
import React from 'react';

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
      <Screen name="Action" component={Action} />
      <Screen name="EditProfile" component={EditProfile} />
      <Screen name="ActionForm" component={ActionForm} />
      <Screen name="Picker" component={Picker} />
      <Screen name="MyActions" component={MyActions} />
      <Screen name="PendingApprovals" component={PendingApprovals} />

      <Screen name="AddressWizardPartOne" component={AddressWizardPartOne} />
      <Screen name="AddressWizardPartTwo" component={AddressWizardPartTwo} />
      <Screen
        name="AddressWizardPartThree"
        component={AddressWizardPartThree}
      />
    </Navigator>
  </>
);
