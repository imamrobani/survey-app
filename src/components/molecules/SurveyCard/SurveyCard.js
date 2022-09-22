import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Colors, fontType} from '../../../const';

const width = Dimensions.get('window').width - 48;

const SurveyCard = ({data}) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={2} style={fontType.fs10MedBlack}>
        {data.name}
      </Text>
      <Text numberOfLines={3} style={fontType.fs10RegGreyPrimary}>
        {data.address}
      </Text>
      <Text style={fontType.fs12RegPrimary}>{data.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    width: width / 3 - 8
  }
});

export default SurveyCard;
