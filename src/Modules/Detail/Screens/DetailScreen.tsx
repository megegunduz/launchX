import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { Image } from '../../../Components';
import { DetailScreenProps } from '../Types';

import styles from '../styles/DetailScreenStyles';
import { convertToDisplayFormat } from '../../../Utils/DateTimeUtils';

const DetailScreen = (props: DetailScreenProps): JSX.Element => {

  const { date, details, name, detailImage, failures } = props.route.params.data;


  useEffect(() => {
    props.navigation.setOptions({
      title: props.route.params.data.name,
    });
  }, [props]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} >
        <View style={styles.imageContainer}>
          <Image imageUrl={detailImage} style={styles.image} />
        </View>
        <Text style={styles.text}>{`Name: ${ name }`}</Text>
        {!!details && <Text style={styles.text}>{`Details: ${ details }`}</Text>}
        <Text style={styles.text}>{`Date: ${ convertToDisplayFormat(date) }`}</Text>
        {!!failures?.length && (
          <View>
            <Text style={styles.sectionTitle}>{'Failures'}</Text>
            {failures.map((failure, index) => (
              <View key={`failre-${ index }`}>
                {!!failure.reason && <Text style={styles.text}>{`Reason: ${ failure.reason }`}</Text>}
                {!!failure.time && <Text style={styles.text}>{`Time: ${ failure.time }`}</Text>}
                {!!failure.altitude && <Text style={styles.text}>{`Altitude: ${ failure.altitude }`}</Text>}
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
};

export default DetailScreen;
