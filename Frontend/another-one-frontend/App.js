import React from 'react';
import { StyleSheet, Text, ScrollView, View, AsyncStorage } from 'react-native';
import StoreCard from './src/components/StoreCard/StoreCard';
import ProductCard from './src/components/ProductCard/ProductCard';
import StoreProductCard from './src/components/StoreProductCard/StoreProductCard';
import SearchOptionButton from './src/components/SearchOptionButton/SearchOptionButton';
import { Provider } from 'react-redux';
import store from './src/redux_config/store';
import StoreScreen from './src/screens/StoresScreen/StoresScreen';
import StoreProductsNavigator from './src/routes/Navigator';
import { Font, AppLoading } from 'expo';
import { persistStore } from 'redux-persist';

export default class App extends React.Component {
  state = {
    isReady: false,
  };
  async componentDidMount() {
    await Font.loadAsync([
      { Light: require('./assets/fonts/Light.otf') },
      { Bold: require('./assets/fonts/Bold.otf') },
      { Italic: require('./assets/fonts/Italic.otf') },
      { Medium: require('./assets/fonts/Medium.otf') },
      { Regular: require('./assets/fonts/Regular.otf') },
      { SemiBold: require('./assets/fonts/SemiBold.otf') },
    ]);
    persistStore(
      store,
      {
        storage: AsyncStorage,
        whitelist: ['shoppingList'],
      },
      () => {
        this.setState({ isReady: true });
      },
    );
  }
  render() {
    if (this.state.isReady) {
      return (
        <Provider store={store}>
          <StoreProductsNavigator />
        </Provider>
      );
    } else {
      return <AppLoading />;
    }
  }
}
