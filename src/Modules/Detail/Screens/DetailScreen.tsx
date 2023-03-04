import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { DetailScreenProps } from '../Types';

const DetailScreen = (props: DetailScreenProps): JSX.Element => {
  
  useEffect(() => {
    props.navigation.setOptions({
      title: props.route.params.data.name,
    });
  }, [props]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detail</Text>
    </View>
  )
};

export default DetailScreen;
