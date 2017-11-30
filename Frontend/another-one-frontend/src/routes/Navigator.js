import React from 'react';
import { View, Text, Image } from 'react-native';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import StoresScreen from '../screens/StoresScreen/StoresScreen';
import ProductsScreen from '../screens/ProductsScreen/ProductsScreen';
import Styles from '../shared/styles';
import StoreProductsScreen from '../screens/StoreProductsScreen/StoreProductsScreen';

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
      screen: ProductsScreen,
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
        backgroundColor: 'rgba(22, 22, 22, 0)',
        height: 60,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1,
        zIndex: 9999999,
      },
      activeTintColor: '#190559',
      inactiveTintColor: 'black',
      labelStyle: {
        fontFamily: Styles.Regular,
      },
    },
  },
);

const StoreProductsNavigator = StackNavigator({
  Home: {
    screen: Navigator,
  },
  Store: {
    screen: StoreProductsScreen,
  },
});

export default StoreProductsNavigator;
