import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { DatePicker } from '../../../Components';

import styles from '../styles/SearchBarStyles';
import { AppStackNavigationProp } from '../../../Navigation';
import { ScreenNames } from '../../../Constants';

const SearchBar = () => {

  const navigation = useNavigation<AppStackNavigationProp>();

  const navigateToSearch = (date: Date) => {
    navigation.navigate(ScreenNames.SEARCH, {
      searchedDate: date.toDateString()
    });
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Search a launch with a specific date'}</Text>
      <DatePicker onChange={navigateToSearch} />
    </View>
  )
};

export default SearchBar;
