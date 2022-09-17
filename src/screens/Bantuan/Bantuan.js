import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Bantuan = () => {
  return (
    <View style={styles.container}>
      <Text>Bantuan</Text>
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

export default Bantuan;
