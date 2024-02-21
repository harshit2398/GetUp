import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import {ALPHABET_SCREEN, DASHBOARD} from '../constants/routes';
import {Alphabet} from '../screens/Alphabet';
import {Dashboard} from '../screens/Dashboard';

export const AppNavigator = () => {
  const AppStack = createNativeStackNavigator();

  return (
    <AppStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={DASHBOARD}>
      <AppStack.Screen name={DASHBOARD} component={Dashboard} />
      <AppStack.Screen
        name={ALPHABET_SCREEN}
        component={Alphabet}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerStyle: {backgroundColor: 'transparent'},
          headerTitle: '',
          // headerBackTitle: '<<',
          headerBackTitleVisible: false,
        }}
      />
    </AppStack.Navigator>
  );
};
