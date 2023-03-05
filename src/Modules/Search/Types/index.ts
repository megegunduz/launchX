import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenNames } from '../../../Constants';
import { AppStackParamList } from '../../../Navigation';

export type SearchScreenProps = NativeStackScreenProps<
  AppStackParamList,
  ScreenNames.SEARCH
>;

export type SearchScreenNavigationProp = SearchScreenProps['navigation'];
export type SearchScreenRouteProp = SearchScreenProps['route'];
