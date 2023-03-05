import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { View, FlatList } from 'react-native';
import { LaunchCard } from '../../../Components';

import useLaunches from '../Hooks/useLaunches';
import { SearchBar } from '../../Search';

import styles from '../styles/HomeScreenStyles';

const HomeScreen = (props: NativeStackScreenProps<{}>): React.ReactElement => {

  const { launches, increasePage } = useLaunches();

  return (
    <View style={styles.container}>
      <SearchBar />
      {
        launches.length > 0 ?
          <FlatList
            style={styles.flatList}
            contentContainerStyle={styles.listContentContainer}
            numColumns={2}
            data={launches}
            keyExtractor={(item, index) => `launch-${ index }`}
            renderItem={({ item, index }) => <LaunchCard launch={item} />}
            showsVerticalScrollIndicator={false}
            onEndReached={increasePage}
          />
          :
          null
      }
    </View>
  );
};

export default HomeScreen;
