import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {IlSplashScreen, LogoMovus} from '../../assets';
import {Gap} from '../../components';
import {Colors, Fonts} from '../../const';

const SplashScreen = ({navigation}) => {
  const {navigate} = navigation;

  useEffect(() => {
    setTimeout(() => {
      navigate('Login');
    }, 2500);
  }, []);

  return (
    <View style={styles.container}>
      <Animatable.View useNativeDriver animation={'bounceIn'} delay={500} duration={2000}>
        <LogoMovus />
        <Text style={styles.title}>Survey Management System</Text>
      </Animatable.View>
      <Animatable.View useNativeDriver animation={'fadeIn'} delay={500} duration={2000}>
        <Gap height={60} />
        <IlSplashScreen />
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 11,
    color: Colors.greyPrimary,
    marginTop: 4
  }
});

export default SplashScreen;
