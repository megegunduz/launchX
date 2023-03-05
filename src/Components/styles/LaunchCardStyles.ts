import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../Constants';

export default StyleSheet.create({
  card: {
    width: (Metrics.width - 3 * Metrics.measure(10)) / 2,
    marginHorizontal: Metrics.measure(5),
    marginVertical: Metrics.measure(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: Metrics.measure(50),
    height: Metrics.measure(50),
    marginVertical: Metrics.measure(10),
  },
  name: {
    textAlign: 'center',
    fontSize: Fonts.size(16),
  },
});