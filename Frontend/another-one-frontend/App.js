import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StoreCard from './src/components/StoreCard/StoreCard';
import ProductCard from './src/components/ProductCard/ProductCard';
import StoreProductCard from './src/components/StoreProductCard/StoreProductCard';
import SearchOptionButton from './src/components/SearchOptionButton/SearchOptionButton';
import { Provider } from 'react-redux';
import store from './src/redux_config/store';
import StoreScreen from './src/screens/StoresScreen/StoresScreen';
import { Font } from 'expo';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
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
    this.setState({ fontLoaded: true });
  }
  render() {
    if (this.state.fontLoaded) {
      return (
        <Provider store={store}>
          <View style={styles.container}>
            <StoreCard
              storeName="Fakta"
              discountNumber="100"
              shopImageUrl="https://placehold.it/50x50.png"
            />
            <ProductCard
              shopImageUrl="https://placehold.it/40x40.png"
              productImageUrl="https://placehold.it/40x40.png"
              productName="Cuban Orange"
              productQuantity="1"
              productQuantityType="kg"
              productPrice="20"
            />
            <StoreProductCard
              productImageUrl="https://placehold.it/40x40.png"
              productName="Cuban Orange"
              productQuantity="1"
              productQuantityType="kg"
              productPrice="20"
            />
            <SearchOptionButton categoryName="Veggies fsafasf " />
            <StoreScreen />
          </View>
        </Provider>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
