import React from 'react';
import { View, Text, Image } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import StoresScreen from '../screens/StoresScreen/StoresScreen';
import Styles from '../shared/styles';

const Navigator = TabNavigator(
  {
    Stores: {
      screen: StoresScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../assets/images/store-inactive.png')}
            style={{ height: 20, width: 40, tintColor: tintColor }}
          />
        ),
        tabBarLabel: 'Home',
      },
    },

    Products: {
      screen: StoresScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../assets/images/products-inactive.png')}
            style={{ height: 20, width: 40, tintColor: tintColor }}
          />
        ),
        tabBarLabel: 'Products',
      },
    },
    ShoppingList: {
      screen: StoresScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../assets/images/shopping-list-inactive.png')}
            style={{ height: 20, width: 40, tintColor: tintColor }}
          />
        ),
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
