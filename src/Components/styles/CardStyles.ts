import { StyleSheet } from 'react-native';
import { Metrics } from '../../Constants';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: Metrics.measure(10),
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    elevation: Metrics.elevation(2),
  }
})