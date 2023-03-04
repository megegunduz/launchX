import React, {PropsWithChildren} from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';

import styles from './styles/CardStyles';
type CardProps = PropsWithChildren<{onPress: (() => void), style: ViewStyle | null}>

const Card = (props: CardProps): JSX.Element => {
  const {
    onPress,
    children,
    style,
  } = props;

  return (
    <TouchableOpacity
      disabled={!onPress}
      activeOpacity={0.75}
      style={[styles.container, style]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Card;
