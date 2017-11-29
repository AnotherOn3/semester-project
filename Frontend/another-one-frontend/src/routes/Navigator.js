import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import StoresScreen from '../screens/StoresScreen/StoresScreen';

const Navigator = TabNavigator({
  Stores: {
    screen: StoresScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
    },
  },
});

export default Navigator;
