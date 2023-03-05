import React from 'react';
import { View, Text } from 'react-native';
import { SearchScreenProps } from '../Types';

const SearchScreen = (props: SearchScreenProps): JSX.Element => {

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{'Search Screen'}</Text>
      <Text>{props.route.params.searchedDate}</Text>
    </View>
  )
};

export default SearchScreen;
