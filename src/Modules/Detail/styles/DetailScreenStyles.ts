import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../Constants';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    padding: Metrics.measure(20),
  },
  imageContainer: {
    alignSelf: 'center',
    marginBottom: Metrics.measure(50),
  },
  image: {
    width: Metrics.measure(180),
    height: Metrics.measure(180),
  },
  text: {
    fontSize: Fonts.size(16),
    lineHeight: Metrics.measure(24),
  },
  sectionTitle: {
    fontSize: Fonts.size(18),
    fontWeight: 'bold',
    marginVertical: Metrics.measure(10),
  },
});