import { StyleSheet } from 'react-native';
import { Metrics } from '../../Constants';

type DatePickerStylingParams = {
  isSelected: boolean,
};

export default ({ isSelected }: DatePickerStylingParams) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    marginRight: Metrics.measure(10),
  },
  text: {
    color: isSelected ? 'black' : '#a8a8a8'
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: Metrics.width * 0.06,
    height: undefined,
    aspectRatio: 1,
  },
  touchableText: {
    color: '#a8a8a8',
  },
});
