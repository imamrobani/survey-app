import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../../components';
import {fontType} from '../../../const';
import {FORECAST} from '../Home.mock';

const ListForcast = () => {
  const renderItem = ({index, item}) => {
    return (
      <View style={styles.contentContainer}>
        {item.icon}
        <Gap height={12} />
        <Text style={fontType.fs10RegWhite}>{item.time}</Text>
        <Gap height={12} />
        <Text style={fontType.fs10RegWhite}>{item.degree}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={FORECAST}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 8
  },
  contentContainer: {
    marginLeft: 16,
    alignItems: 'center'
  }
});

export default ListForcast;
