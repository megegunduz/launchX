import React from 'react';
import { View, FlatList } from 'react-native';
import { SearchScreenProps } from '../Types';
import useSearch from '../Hooks/useSearch';
import { SearchBar } from '..';
import NoResult from '../Components/NoResult';
import { useAlert } from '../../../Features/Alert';
import { ReducerNames } from '../../../Redux';
import { LaunchCard } from '../../../Components';
import styles from '../styles/SearchScreenStyles';

const SearchScreen = (props: SearchScreenProps): JSX.Element => {

  const { launches, isLoading, error } = useSearch({ date: props.route.params.searchedDate });
  useAlert({ reducerName: ReducerNames.SEARCH });

  return (
    <View style={styles.container}>
      <SearchBar />
      {(!!launches && launches.length > 0) ? (
        <FlatList
          style={styles.flatList}
          contentContainerStyle={styles.listContentContainer}
          data={launches}
          keyExtractor={(item, index) => `launch-item-${ index }`}
          numColumns={2}
          renderItem={({ item, index }) => <LaunchCard launch={item} />}
        />
      ) : (
        <View style={styles.contentContainer}>
          <NoResult />
        </View>
      )}
    </View>
  )
};

export default SearchScreen;
