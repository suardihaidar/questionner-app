import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from './Welcome';

/**
 * Stack Navigator
 */

const Stack = createStackNavigator();
const stackScreens = [
  {
    name: 'welcome',
    component: Welcome,
    options: {headerShown: false, gestureEnabled: false},
  },
];

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      {stackScreens.map((val, index) => (
        <Stack.Screen
          name={val.name}
          component={val.component}
          options={val.options}
          key={index}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AppNavigator;
