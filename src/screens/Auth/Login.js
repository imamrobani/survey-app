import React from 'react';
import {StyleSheet, View} from 'react-native';
import {spacings} from '../../const/Metrics';
import ImageLogin from './Auth.fragment/ImageLogin';
import InputFieldLogin from './Auth.fragment/InputFieldLogin';
import LoginSubmit from './Auth.fragment/LoginSubmit';

const Login = () => {
  return (
    <View style={styles.container}>
      <ImageLogin />
      <InputFieldLogin />
      <LoginSubmit />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacings.space36,
    justifyContent: 'center'
  }
});

export default Login;
