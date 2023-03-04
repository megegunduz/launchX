import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../Modules/Home';

const AppStack = createNativeStackNavigator();

const AppNavigation = (props: object): JSX.Element => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="home-screen"
        component={HomeScreen}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigation;
