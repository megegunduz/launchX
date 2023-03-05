import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Platform } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { convertToDisplayFormat } from '../Utils/DateTimeUtils';
import Icon from './Icon';
import Svgs from '../Assets/Svgs';

import getStyles from './styles/DatePickerStyles';
import { Texts } from '../Constants';

type DatePickerProps = {
  defaultValue?: Date,
  onClose?: (() => void),
  onChange?: ((date: Date) => void),
  pickerText?: string
}

const DatePicker = ({ defaultValue = new Date, onChange, onClose, pickerText }: DatePickerProps) => {

  const [value, setValue] = useState(defaultValue);
  const [showPicker, setShowPicker] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const styles = getStyles({ isSelected });

  const isIOS = Platform.OS === 'ios';

  const handleOnChange = (event: DateTimePickerEvent, selectedDate: Date | undefined): void => {
    onClose?.();
    if (!selectedDate) return;

    if (isIOS) {
      setValue(selectedDate);
      return;
    }
    
    setIsSelected(true);
    onChange?.(selectedDate);
    setShowPicker(false);
    setValue(selectedDate);
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={() => setShowPicker(true)}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{!isSelected ? Texts.datePicker.placeholder : value ? convertToDisplayFormat(value) : ''}</Text>
        </View>
          <Icon svg={Svgs.Calendar} containerStyle={styles.iconContainer} iconStyle={{ width: 25, height: 25 }} colors={['black']} />
        </TouchableOpacity>
      </View>
      {showPicker && (
        <DateTimePicker
          value={value}
          mode='date'
          onChange={handleOnChange}
        />
      )}
    </View>
  )
};

export default DatePicker;
