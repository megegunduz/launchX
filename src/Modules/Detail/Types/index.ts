import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenNames } from '../../../Constants';
import type { AppStackParamList } from '../../../Navigation';

export type DetailScreenProps = NativeStackScreenProps<
  AppStackParamList,
  ScreenNames.DETAIL
>;


export type DetailScreenNavigationProp = DetailScreenProps['navigation'];
export type DetailScreenRouteProps = DetailScreenProps['route'];
