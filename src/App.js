import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {enableScreens} from 'react-native-screens';
import {Colors} from './const';
import RNBootSplash from 'react-native-bootsplash';
import 'react-native-gesture-handler';

enableScreens();
RNBootSplash.hide(); // immediate

const MainApp = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{backgroundColor: Colors.primary}} />
      <Router />
    </NavigationContainer>
  );
};

const App = () => {
  return <MainApp />;
};

export default App;
