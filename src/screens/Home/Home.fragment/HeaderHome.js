import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IcNotif, LogoMovus} from '../../../assets';
import {fontType} from '../../../const';

const HeaderHome = () => {
  return (
    <View style={styles.container}>
      <View>
        <LogoMovus />
        <Text style={fontType.fs10RegGreyPrimary}>Field Management</Text>
      </View>
      <IcNotif />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
    // padding: 24
  }
});

export default HeaderHome;
