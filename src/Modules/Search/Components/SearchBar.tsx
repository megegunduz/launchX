import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { DatePicker } from '../../../Components';

import styles from '../styles/SearchBarStyles';
import { AppStackNavigationProp } from '../../../Navigation';
import { ScreenNames } from '../../../Constants';
import { convertToISOString } from '../../../Utils/DateTimeUtils';

const SearchBar = () => {

  const navigation = useNavigation<AppStackNavigationProp>();

  const navigateToSearch = (date: Date) => {
    const searchedDate = convertToISOString(date);
    const navigationState = navigation.getState();
    const currentScreenIndex = navigationState.routes.length - 1;
    if (navigationState.routes[currentScreenIndex].name === ScreenNames.SEARCH) {
      navigation.setParams({
        searchedDate,
      })
    } else {
      navigation.navigate(ScreenNames.SEARCH, {
        searchedDate,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Search a launch with a specific date'}</Text>
      <DatePicker onChange={navigateToSearch} />
    </View>
  )
};

export default SearchBar;
