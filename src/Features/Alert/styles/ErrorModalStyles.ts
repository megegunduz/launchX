import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../Constants';

export default StyleSheet.create({
  contianer: {
    backgroundColor: 'white',
    borderRadius: Metrics.measure(15),
    alignItems: 'center',
    padding: Metrics.measure(40),
  },
  closeIconContainer: {
    position: 'absolute',
    right: Metrics.measure(10),
    top: Metrics.measure(10),
  },
  closeIcon: {
    width: Metrics.measure(30),
    height: Metrics.measure(30),
  },
  errorIcon: {
    width: Metrics.measure(80),
    height: Metrics.measure(80),
  },
  message: {
    marginTop: Metrics.measure(30),
    fontSize: Fonts.size(16),
    color: 'black',
    textAlign: 'center',
  },
});
