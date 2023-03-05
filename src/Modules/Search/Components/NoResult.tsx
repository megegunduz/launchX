import React from 'react';
import { View, Text } from 'react-native';

const NoResult = (): JSX.Element => {
  return (
    <View>
      <Text>{'No result for selected date.'}</Text>
    </View>
  );
};

export default NoResult;
