import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { SearchScreenProps } from '../Types';
import useSearch from '../Hooks/useSearch';
import { SearchBar } from '..';
import NoResult from '../Components/NoResult';

const SearchScreen = (props: SearchScreenProps): JSX.Element => {

  const { launches, isLoading, error } = useSearch({ date: props.route.params.searchedDate });

  return (
    <View style={{flex: 1}}>
      <SearchBar />
        <FlatList
          data={launches}
          keyExtractor={(item, index) => `launch-item-${index}`}
          renderItem={({item, index}) => (
            <View>
              <Text>{item.name}</Text>
            </View>
          )}
          ListEmptyComponent={NoResult}
        />
    </View>
  )
};

export default SearchScreen;
