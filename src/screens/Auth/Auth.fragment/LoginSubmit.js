import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../../../components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {fontType} from '../../../const/Typography';
import {spacings} from '../../../const/Metrics';

const LoginSubmit = () => {
  return (
    <View>
      <Button title="Login" />
      <TouchableOpacity activeOpacity={0.7}>
        <Text style={styles.helpText}>Butuh bantuan?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  helpText: {
    marginTop: spacings.space40,
    textAlign: 'center',
    ...fontType.fs12RegGreyPrimary
  }
});

export default LoginSubmit;
