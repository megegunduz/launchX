import React from 'react';
import { Text, Image } from 'react-native';
import { Card } from '../../../Components';
import { Launch } from '../Types';
import styles from '../styles/LaunchCardStyles';

type LaunchCardPops = {
  launch: Launch,
};

const LaunchCard = (props: LaunchCardPops) => {

  const { launch } = props;
  const { name, image } = launch;

  return (
    <Card
      onPress={() => {}}
      style={styles.card}
    >
      {image ? <Image source={{ uri: image }} style={styles.image} /> : null}
      <Text numberOfLines={2} style={styles.name}>{name}</Text>
    </Card>
  )
};

export default LaunchCard;
