import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../const';
import HeaderHome from './Home.fragment/HeaderHome';
import TitleHome from './Home.fragment/TitleHome';

const Home = () => {
  return (
    <View style={styles.container}>
      <HeaderHome />
      <TitleHome />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  }
});

export default Home;
