import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import PopularProduct from '../../components/PopularProduct/PopularProduct';
import Header from '../../components/Header/Header';
import { fetchProducts } from './actions';

class ProductsScreen extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderProductCard = () => {
    if (this.props.products) {
      return this.props.products.products.map(product => (
        <ProductCard
          key={product.id}
          productName={product.name}
          shopImageUrl={product.shopImage}
          productImageUrl={product.image}
          productQuantity={product.quantity}
          productQuantityType={product.quantityType}
          productPrice={product.price}
        />
      ));
    }
  };

  render() {
    if (this.props.products) {
      return (
        <View>
          <Header
            imageUri={require('../../../assets/images/products-active.png')}
            title="Products"
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            automaticallyAdjustContentInsets={false}
            contentContainerStyle={styles.container}
          >
            {this.renderProductCard()}
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
    products: state.products,
  }),
  { fetchProducts },
)(ProductsScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
