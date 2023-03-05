import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenNames } from '../Constants';
import { HomeScreen } from '../Modules/Home';
import { DetailScreen } from '../Modules/Detail';
import { SearchScreen } from '../Modules/Search';
import { AppStackParamList } from './Types';

const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppNavigation = (props: object): JSX.Element => {
  return (
    <AppStack.Navigator screenOptions={{
      headerTitleAlign: 'center',
    }}>
      <AppStack.Screen
        name={ScreenNames.HOME}
        component={HomeScreen}
        options={{
          title: 'LaunchX'
        }}
      />
      <AppStack.Screen
        name={ScreenNames.DETAIL}
        component={DetailScreen}
        options={{
          title: 'Details'
        }}
      />
      <AppStack.Screen
        name={ScreenNames.SEARCH}
        component={SearchScreen}
        options={{
          title: 'Search'
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigation;
