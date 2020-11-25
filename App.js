import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';

import RootView from '@/views';
import {GlobalProvider} from './src/context/globalState';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({duration: 250});
  }, []);

  return (
    <GlobalProvider>
      <NavigationContainer>
        <RootView />
      </NavigationContainer>
    </GlobalProvider>
  );
};

export default App;
