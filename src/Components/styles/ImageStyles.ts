import { ImageStyle, StyleSheet } from 'react-native';
import { SvgProps } from '../../Assets/Svgs';
import { Metrics } from '../../Constants';

type ImageStyleParams = {
  style?: ImageStyle,
  iconStyle?: SvgProps['style'],
}

export default ({ style, iconStyle }: ImageStyleParams) => StyleSheet.create({
  image: {
    width: Metrics.measure(50),
    aspectRatio: 1,
    ...style,
  },
  icon: {
    width: Metrics.measure(50),
    height: Metrics.measure(50),
    ...iconStyle,
  },
});
