import React, { FC } from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import { SvgProps } from '../Assets/Svgs';

type IconProps = {
  svg: FC<{style?: SvgProps['style'], colors?: SvgProps['colors']}>,
  iconStyle?: SvgProps['style'],
  colors?: SvgProps['colors'],
  containerStyle?: ViewStyle,
  onPress?: (() => void),
}

const Icon = (props: IconProps): JSX.Element => {
  const { svg: Svg, containerStyle, iconStyle, colors, onPress } = props;

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={0.4}
    >
      <Svg style={iconStyle} colors={colors} />
    </TouchableOpacity>
  );
};

export default Icon;
