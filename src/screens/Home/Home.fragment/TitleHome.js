import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fontType} from '../../../const';
import WeatherCard from './WeatherCard';

const TitleHome = () => {
  return (
    <View style={styles.container}>
      <Text style={fontType.fs18RegGreyPrimary}>
        Hi, <Text style={fontType.fs18SemiGreyPrimary}>Dohan Radianto</Text>
      </Text>
      <WeatherCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24
  }
});

export default TitleHome;
