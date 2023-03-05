import React from 'react';
import { View, Text } from 'react-native';
import { Texts } from '../../../Constants';

const NoResult = (): JSX.Element => {
  return (
    <View>
      <Text>{Texts.search.noResult}</Text>
    </View>
  );
};

export default NoResult;
