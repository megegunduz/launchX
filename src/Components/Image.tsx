import React from 'react';
import { Image as RNImage, ImageStyle } from 'react-native';
import Svgs, { SvgProps } from '../Assets/Svgs';
import Icon from './Icon';

import getStyles from './styles/ImageStyles';

type ImageProps = {
  imageUrl?: string | null,
  style?: ImageStyle,
  iconStyle?: SvgProps['style'],
}

const Image = ({ imageUrl, style, iconStyle }: ImageProps): JSX.Element => {
  const styles = getStyles({ style, iconStyle });

  return imageUrl ? (
    <RNImage source={{ uri: imageUrl }} style={styles.image} />
  ) : (
    <Icon svg={Svgs.NoImage} iconStyle={styles.icon} containerStyle={styles.image} />
  );
};

export default Image;
