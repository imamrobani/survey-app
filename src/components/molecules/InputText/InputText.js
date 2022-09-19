import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Colors} from '../../../const';

const InputText = ({value, placeholder, onChangeText, secureTextEntry = false}) => {
  return (
    <TextInput
      style={styles.inputContainer}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.greyPrimary,
    height: 35,
    paddingHorizontal: 14,
    paddingVertical: 8
  }
});

export default InputText;
