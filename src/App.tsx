import React from 'react';
import {SafeAreaView} from 'react-native';

import {AppNavigationContainer} from './navigation/AppNavigationContainer';
import {SECONDARY_COLOR} from './constants/colors';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1, backgroundColor: SECONDARY_COLOR}}>
      <AppNavigationContainer />
    </SafeAreaView>
  );
};

export default App;
