import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';

import RootView from '@/views';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({duration: 250});
  }, []);

  return (
    <NavigationContainer>
      <RootView />
    </NavigationContainer>
  );
};

export default App;
