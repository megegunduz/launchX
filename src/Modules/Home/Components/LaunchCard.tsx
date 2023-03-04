import React from 'react';
import { Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from '../../../Components';

import { Launch } from '../Types';
import type { AppStackNavigationProp } from '../../../Navigation';
import styles from '../styles/LaunchCardStyles';
import { ScreenNames } from '../../../Constants';

type LaunchCardPops = {
  launch: Launch,
};

const LaunchCard = (props: LaunchCardPops) => {

  const { launch } = props;
  const { name, image } = launch;

  const navigation = useNavigation<AppStackNavigationProp>();

  const navigateToDetail = () => {
    navigation.navigate(ScreenNames.DETAIL, {
      data: launch,
    });
  };

  return (
    <Card
      onPress={navigateToDetail}
      style={styles.card}
    >
      {image ? <Image source={{ uri: image }} style={styles.image} /> : null}
      <Text numberOfLines={2} style={styles.name}>{name}</Text>
    </Card>
  )
};

export default LaunchCard;
