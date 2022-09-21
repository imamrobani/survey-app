import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Customer = () => {
  return (
    <View style={styles.container}>
      <Text>Customer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Customer;
