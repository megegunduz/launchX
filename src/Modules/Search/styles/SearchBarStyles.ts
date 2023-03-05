import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../Constants';

export default StyleSheet.create({
  container: {
    padding: Metrics.measure(20),
  },
  title: {
    color: 'black',
    marginBottom: Metrics.measure(5),
    fontSize: Fonts.size(14)
  },
});
