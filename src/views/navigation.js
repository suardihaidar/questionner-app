import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import Info from './Info';
import Result from './Result';
import Guide from './Guide';
import ResultDetail from './ResultDetail';

import Form from './Form';
import MainQuest from './MainQuest';
import Done from './Done';

import SharedHeader from '../components/SharedHeader';

/**
 * Stack Navigator
 */

const Stack = createStackNavigator();
const stackScreens = [
  {
    name: 'home',
    component: Home,
    options: {headerShown: false, gestureEnabled: false},
  },
  {
    name: 'info',
    component: Info,
    options: {
      gestureEnabled: false,
      header: () => <SharedHeader title="Info" />,
    },
  },
  {
    name: 'result',
    component: Result,
    options: {
      gestureEnabled: false,
      header: () => <SharedHeader title="Hasil" />,
    },
  },
  {
    name: 'guide',
    component: Guide,
    options: {
      gestureEnabled: false,
      header: () => <SharedHeader title="Lembar Observasi" />,
    },
  },
  {
    name: 'form',
    component: Form,
    options: {
      gestureEnabled: false,
      header: () => <SharedHeader title="Lembar Observasi" />,
    },
  },
  {
    name: 'mainQuest',
    component: MainQuest,
    options: {
      gestureEnabled: false,
      header: () => <SharedHeader title="Lembar Observasi" />,
    },
  },
  {
    name: 'done',
    component: Done,
    options: {gestureEnabled: false, headerShown: false},
  },
  {
    name: 'resultDetail',
    component: ResultDetail,
    options: {
      gestureEnabled: false,
      header: () => <SharedHeader title="Detail" />,
    },
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
