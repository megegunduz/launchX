import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux';
import Svgs from '../../../Assets/Svgs';
import { Icon } from '../../../Components';
import { AlertSelectors } from '../Redux/AlertRedux';
import { ErrorAlert } from '../Types';

import styles from '../styles/ErrorModalStyles';

const ErrorModal = () => {
  const errors = useSelector(AlertSelectors.errors);
  const [errorInDisplay, setErrorInDisplay] = useState<ErrorAlert | null>(null);

  const closeError = () => {
    setErrorInDisplay(null);
  };
  
  useEffect(() => {
    if (errors && !errorInDisplay) {
      setErrorInDisplay(errors[0]);
    }
    else if (errorInDisplay && errors?.length === 0) {
      closeError();
    }
  }, [errors, errorInDisplay]);


  return (
    <Modal
      isVisible={!!errorInDisplay}
      backdropOpacity={0.8}
      backdropColor={'black'}
      animationIn={'zoomIn'}
      animationOut={'zoomOut'}
      animationInTiming={300}
      animationOutTiming={200}
      backdropTransitionInTiming={300}
      backdropTransitionOutTiming={0}
      onBackdropPress={closeError}
    >
      <View style={styles.contianer}>
        <TouchableOpacity onPress={closeError}
          style={styles.closeIconContainer}
        >
          <Icon svg={Svgs.Close} iconStyle={styles.closeIcon} />
        </TouchableOpacity>
        <Icon svg={Svgs.Error} iconStyle={styles.errorIcon} />
        <Text style={styles.message}>{errorInDisplay?.message}</Text>
      </View>
    </Modal>
  );
};

export default ErrorModal;
