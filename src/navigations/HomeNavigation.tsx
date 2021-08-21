import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';

import {HomeStackParamList} from '../types/navigations/home';
import DetailScreen from '../screens/Detail';
import HomeScreen from '../screens/Home/index.container';

const HomeStack = createStackNavigator<HomeStackParamList>();

function HomeNavigation() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Detail" component={DetailScreen} />
    </HomeStack.Navigator>
  );
}

export default HomeNavigation;
