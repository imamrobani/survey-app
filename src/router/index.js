import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen, Login, Home, Customer, Survey, Bantuan} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const MainApp = () => {
//   return (
//     <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
//       <Tab.Screen name="Home" component={HomeCli} options={{headerShown: false}} />
//       <Tab.Screen name="Customer" component={Customer} />
//       <Tab.Screen name="Survey" component={Survey} />
//       <Tab.Screen name="Bantuan" component={Bantuan} />
//     </Tab.Navigator>
//   );
// };

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default Router;
