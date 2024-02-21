import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {AppNavigator} from './AppNavigator';

export const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};
