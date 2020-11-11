import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import RootView from '@/views';

const App = () => {
  return (
    <NavigationContainer>
      <RootView />
    </NavigationContainer>
  );
};

export default App;
