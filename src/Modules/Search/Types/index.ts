import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenNames } from '../../../Constants';
import { AppStackParamList } from '../../../Navigation';
import { type Launch } from '../../../Types';

export type SearchScreenProps = NativeStackScreenProps<
  AppStackParamList,
  ScreenNames.SEARCH
>;

export type SearchScreenNavigationProp = SearchScreenProps['navigation'];
export type SearchScreenRouteProp = SearchScreenProps['route'];

export type SearchState = {
  launches: Launch[] | null,
  isLoading: boolean,
  error: Error | null,
};
