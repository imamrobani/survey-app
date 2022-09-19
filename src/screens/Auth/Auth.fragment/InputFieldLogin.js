import {StyleSheet, View} from 'react-native';
import React from 'react';
import {spacings} from '../../../const/Metrics';
import {Gap, InputText} from '../../../components';

const InputFieldLogin = () => {
  return (
    <View style={styles.container}>
      <InputText placeholder={'Email'} />
      <Gap height={spacings.space12} />
      <InputText placeholder={'Password'} secureTextEntry={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: spacings.space58,
    marginBottom: spacings.space36
  }
});

export default InputFieldLogin;
