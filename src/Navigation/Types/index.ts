import { ScreenNames } from '../../Constants'
import type { Launch } from '../../Modules/Home';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AppStackParamList = {
  [ScreenNames.HOME]: undefined,
  [ScreenNames.DETAIL]: {
    data: Launch,
  },
};

export type AppStackNavigationProp = NativeStackNavigationProp<AppStackParamList>