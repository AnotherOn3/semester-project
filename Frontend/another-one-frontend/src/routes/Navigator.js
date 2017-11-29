import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import StoresScreen from '../screens/StoresScreen/StoresScreen';
import Styles from '../shared/styles';

const Navigator = TabNavigator(
  {
    Stores: {
      screen: StoresScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
      },
    },

    Products: {
      screen: StoresScreen,
      navigationOptions: {
        tabBarLabel: 'Products',
      },
    },
    ShoppingList: {
      screen: StoresScreen,
      navigationOptions: {
        tabBarLabel: 'Shopping List',
      },
    },
  },
  {
    tabBarComponent: TabBarBottom,
    animationEnabled: true,
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        backgroundColor: 'orange',
      },
      activeTintColor: '#190559',
      inactiveTintColor: 'black',
      labelStyle: {
        fontFamily: Styles.Regular,
      },
    },
  },
);

export default Navigator;
