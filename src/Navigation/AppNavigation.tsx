import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../Modules/Home';
import { ScreenNames } from '../Constants';
import { DetailScreen } from '../Modules/Detail';
import { AppStackParamList } from './Types';

const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppNavigation = (props: object): JSX.Element => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name={ScreenNames.HOME}
        component={HomeScreen}
      />
      <AppStack.Screen
        name={ScreenNames.DETAIL}
        component={DetailScreen}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigation;
