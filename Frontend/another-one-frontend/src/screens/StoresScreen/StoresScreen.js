import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import StoreCard from '../../components/StoreCard/StoreCard';
import PopularProduct from '../../components/PopularProduct/PopularProduct';
import { fetchStores } from './actions';

class StoresScreen extends React.Component {
  componentDidMount() {
    this.props.fetchStores();
  }

  renderPopularProduct = store => {
    return store.popularProducts.map(product => (
      <PopularProduct
        key={product.id}
        imageUrl={product.image}
        quantity={product.quantity}
        quantityType={product.quantityType}
        price={product.price}
        productName={product.name}
      />
    ));
  };

  renderStoreCard = () => {
    if (this.props.stores) {
      return this.props.stores.stores.map(store => (
        <StoreCard
          key={store.id}
          storeName={store.name}
          shopImageUrl={store.image}
          discountNumber={store.discountNumber}
          popularProduct={this.renderPopularProduct(store)}
        />
      ));
    }
  };

  render() {
    if (this.props.stores) {
      return (
        <ScrollView
          showsVerticalScrollIndicator={false}
          automaticallyAdjustContentInsets={false}
          contentContainerStyle={styles.container}
        >
          {this.renderStoreCard()}
        </ScrollView>
      );
    } else {
      return <View>Loading...</View>;
    }
  }
}

export default connect(
  state => ({
    stores: state.stores,
  }),
  { fetchStores },
)(StoresScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
