import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, Fonts} from './constant';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Survey App !!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: Fonts.POPPINS_BOLD,
    fontSize: 16,
    color: Colors.black
  }
});

export default App;
