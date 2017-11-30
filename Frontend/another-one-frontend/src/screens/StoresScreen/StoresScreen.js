import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import StoreCard from '../../components/StoreCard/StoreCard';
import PopularProduct from '../../components/PopularProduct/PopularProduct';
import Header from '../../components/Header/Header';
import { fetchStores } from './actions';
import { LinearGradient } from 'expo';

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

  goToSingleStore = id => {
    this.props.navigation.navigate('Store', { id: id });
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
          handleNavigation={() => this.goToSingleStore(store.id)}
        />
      ));
    }
  };

  render() {
    if (this.props.stores) {
      return (
        <View>
          <Header
            imageUri={require('../../../assets/images/store-active.png')}
            title="Stores"
          />
          <LinearGradient
            colors={['#FBBB3B', '#F19143']}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,

              alignItems: 'center',
              borderRadius: 5,
              flex: 1,
              width: '100%',
            }}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            automaticallyAdjustContentInsets={false}
            contentContainerStyle={styles.container}
          >
            {this.renderStoreCard()}
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
    stores: state.stores,
  }),
  { fetchStores },
)(StoresScreen);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
