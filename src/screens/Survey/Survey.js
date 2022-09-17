import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Survey = () => {
  return (
    <View style={styles.container}>
      <Text>Survey</Text>
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

export default Survey;
