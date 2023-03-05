import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, Image } from '.';

import type { Launch } from '../Types';
import type { AppStackNavigationProp } from '../Navigation';

import { ScreenNames } from '../Constants';
import styles from './styles/LaunchCardStyles';

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
      <Image imageUrl={image} style={styles.image} />
      <Text numberOfLines={2} style={styles.name}>{name}</Text>
    </Card>
  )
};

export default LaunchCard;
