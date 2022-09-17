import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SplashScreen = ({navigation}) => {
  const {navigate} = navigation;

  useEffect(() => {
    setTimeout(() => {
      navigate('Login');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
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

export default SplashScreen;
