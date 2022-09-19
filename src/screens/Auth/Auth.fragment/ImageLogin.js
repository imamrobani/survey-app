import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LogoMovus} from '../../../assets';
import {fontType} from '../../../const/Typography';

const ImageLogin = () => {
  return (
    <View style={styles.container}>
      <LogoMovus />
      <Text style={fontType.fs12RegGreyPrimary}>Survey Management System</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ImageLogin;
