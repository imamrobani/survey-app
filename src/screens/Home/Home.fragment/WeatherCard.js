import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcLoc, IcRainy} from '../../../assets';
import {Gap} from '../../../components';
import {Colors, fontType} from '../../../const';
import ListForcast from './ListForcast';
import LinearGradient from 'react-native-linear-gradient';

const WeatherCard = () => {
  return (
    <LinearGradient
      colors={Colors.homeGradient}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}
      style={styles.linearGradient}>
      <View style={styles.rowContent}>
        <View>
          <View style={styles.row}>
            <IcLoc />
            <Text style={styles.city}>Tanah Abang</Text>
          </View>
          <View style={styles.row}>
            <Text style={fontType.fs32RegWhite}>
              27<Text style={fontType.fs16RegWhite}>c</Text>
            </Text>
            <Gap width={8} />
            <IcRainy />
          </View>
        </View>
        <View>
          <ListForcast />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginTop: 14
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  city: {
    marginLeft: 6,
    ...fontType.fs12RegWhite
  }
});

export default WeatherCard;
