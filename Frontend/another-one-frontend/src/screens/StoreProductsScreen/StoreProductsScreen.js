import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import StoreProductCard from '../../components/StoreProductCard/StoreProductCard';
import PopularProduct from '../../components/PopularProduct/PopularProduct'; // we dont need this right ?
import Header from '../../components/Header/Header';
import { fetchStoreProducts } from './actions';

class StoreProductsScreen extends React.Component {
  componentDidMount() {
    this.props.fetchStoreProducts();
  }

  renderStoreProductCard = () => {
    if (this.props.storeProducts) {
      return this.props.storeProducts.storeProducts.map(storeProduct => (
        <ProductCard
          key={storeProduct.id}
          productName={storeProduct.productName}
          productImageUrl={storeProduct.productImageUrl}
          productQuantity={storeProduct.productQuantity}
          productQuantityType={storeProduct.productQuantityType}
          productPrice={storeProduct.productPrice}
        />
      ));
    }
  };

  render() {
    if (this.props.storeProducts) {
      return (
        <View>
          <Header
            imageUri={require('../../../assets/images/products-active.png')}
            title="StoreProducts"
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            automaticallyAdjustContentInsets={false}
            contentContainerStyle={styles.container}
          >
            {this.renderStoreProductCard()}
          </ScrollView>
        </View>
      );
    } else {
      return <View>Loading...</View>;
    }
  }
}

export default connect(
  state => ({
    storeProducts: state.storeProducts,
  }),
  { fetchStoreProducts },
)(StoreProductsScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
