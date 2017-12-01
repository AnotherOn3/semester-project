import React from 'react';
import { View, Text, Image, Platform } from 'react-native';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import StoresScreen from '../screens/StoresScreen/StoresScreen';
import ProductsScreen from '../screens/ProductsScreen/ProductsScreen';
import ShoppingListScreen from '../screens/ShoppingListScreen/ShoppingListScreen';
import Styles from '../shared/styles';
import StoreProductsScreen from '../screens/StoreProductsScreen/StoreProductsScreen';
import Header from '../components/Header/Header';

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
      screen: ShoppingListScreen,
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
        backgroundColor: Platform.OS === 'ios' ? 'transparent' : 'orange',
        height: 60,
        flex: Platform.OS === 'ios' ? 1 : 0,
        position: Platform.OS === 'android' ? 'absolute' : 'relative',
        left: Platform.OS === 'android' ? 0 : null,
        bottom: Platform.OS === 'android' ? 0 : null,
        right: Platform.OS === 'android' ? 0 : null,
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
