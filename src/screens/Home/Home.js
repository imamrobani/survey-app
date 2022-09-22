import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import SurveyCard from '../../components/molecules/SurveyCard/SurveyCard';
import {Colors, fontType} from '../../const';
import HeaderHome from './Home.fragment/HeaderHome';
import TitleHome from './Home.fragment/TitleHome';
import {SURVEY} from './Home.mock';

const Home = () => {
  const renderItem = ({index, item}) => {
    return <SurveyCard data={item} />;
  };

  return (
    <View style={styles.container}>
      <HeaderHome />
      <TitleHome />
      <Text style={styles.title}>Survey hari ini</Text>
      <FlatList
        data={SURVEY}
        columnWrapperStyle={styles.wrapper}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 24
  },
  title: {
    ...fontType.fs12RegGreyPrimary,
    marginBottom: 24
  },
  wrapper: {
    justifyContent: 'space-between',
    marginBottom: 8
  }
});

export default Home;
