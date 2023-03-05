import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Metrics } from '../../Constants';
import { SvgProps } from './SvgProps';

const Close = ({ style, colors }: SvgProps): JSX.Element => (
  <Svg
  viewBox="0 96 960 960"
  width={style?.width || Metrics.measure(48)}
    height={style?.height || Metrics.measure(48)}
  >
    <Path
      d="M480 618 270 828q-9 9-21 9t-21-9q-9-9-9-21t9-21l210-210-210-210q-9-9-9-21t9-21q9-9 21-9t21 9l210 210 210-210q9-9 21-9t21 9q9 9 9 21t-9 21L522 576l210 210q9 9 9 21t-9 21q-9 9-21 9t-21-9L480 618Z"
      fill={colors?.[0] || '#000000'}
    />
  </Svg>
);

export default Close;