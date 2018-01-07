import React from 'react';
import { View, Text, Image, Platform } from 'react-native';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import StoresScreen from '../screens/StoresScreen/StoresScreen';
import ProductsScreen from '../screens/ProductsScreen/ProductsScreen';
import ShoppingListScreen from '../screens/ShoppingListScreen/ShoppingListScreen';
import Styles from '../shared/styles';
import StoreProductsScreen from '../screens/StoreProductsScreen/StoreProductsScreen';

const StoreProductsNavigator = StackNavigator({
  Home: {
    screen: StoresScreen,
  },
  Store: {
    screen: StoreProductsScreen,
  },
});

const ProductsNavigator = StackNavigator({
  Home: {
    screen: ProductsScreen,
  },
});

const ShoppingListNavigator = StackNavigator({
  Home: {
    screen: ShoppingListScreen,
  },
});

const Navigator = TabNavigator(
  {
    Stores: {
      screen: StoreProductsNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../assets/images/store-inactive.png')}
            style={{
              height: 20,
              width: 40,
              tintColor: tintColor,
              marginTop: Platform.OS === 'android' ? 15 : 0,
            }}
          />
        ),
        tabBarLabel: 'Home',
      },
    },

    Products: {
      screen: ProductsNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../assets/images/products-inactive-header.png')}
            style={{
              height: 24,
              width: 40,
              tintColor: tintColor,
              marginTop: Platform.OS === 'android' ? 15 : 0,
            }}
          />
        ),
        tabBarLabel: 'Products',
      },
    },
    ShoppingList: {
      screen: ShoppingListNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../assets/images/shopping-list-inactive-tab.png')}
            style={{
              height: 23,
              width: 46,
              tintColor: tintColor,
              marginTop: Platform.OS === 'android' ? 15 : 0,
            }}
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
        backgroundColor: 'transparent',
        height: 60,
        flex: Platform.OS === 'ios' ? 1 : 0,
        position: Platform.OS === 'android' ? 'absolute' : 'relative',
        left: Platform.OS === 'android' ? 0 : null,
        bottom: Platform.OS === 'android' ? 0 : null,
        right: Platform.OS === 'android' ? 0 : null,
        shadowColor: 'transparent',
        shadowOpacity: 0,
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
          width: 0,
        },
        elevation: 0,
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
