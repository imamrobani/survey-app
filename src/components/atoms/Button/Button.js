import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../const';
import {fontType} from '../../../const/Typography';

const Button = ({onPress, title, isLoading = false}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size="small" color={Colors.white} />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    ...fontType.fs14RegWhite
  }
});
