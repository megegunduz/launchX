import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import useLaunches from '../Hooks/useLaunches';

const HomeScreen = (props: NativeStackScreenProps<{}>): React.ReactElement => {

  const { launches, page } = useLaunches();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {
        launches?.map((launch, index) => (
          <View key={`launch-${index}`}>
            <Text>{launch.name}</Text>
          </View>
        ))
      }
    </View>
  );
};

export default HomeScreen;
