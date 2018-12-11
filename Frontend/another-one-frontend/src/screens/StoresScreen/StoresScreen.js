import React from 'react';
import { View, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import StoreCard from '../../components/StoreCard/StoreCard';
import PopularProduct from '../../components/PopularProduct/PopularProduct';
import StoresHeader from '../../components/Header/StoresHeader';
import { fetchStores, loginAnon } from './actions';
import { LinearGradient } from 'expo';
import Notification from '../../components/Notification/Notification';
import { AppLoading } from 'expo';
import { Constants } from 'expo';
class StoresScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: (
      <StoresHeader
        title="Stores"
        imageUri={require('../../../assets/images/store-inactive-header.png')}
      />
    ),
  });
  componentDidMount() {
    this.props.fetchStores();
  }

  renderPopularProduct = store => {
    return store.storeProducts.map((product, index) => {
      if (index < 2) {
        return (
          <PopularProduct
            key={product._id}
            imageUrl={product.picture}
            quantity={product.quantity}
            quantityType={product.type}
            price={product.price}
            productName={product.name}
          />
        );
      }
    });
  };

  goToSingleStore = (id, name) => {
    this.props.navigation.navigate('Store', { id: id, name: name });
  };

  renderStoreCard = () => {
    if (this.props.stores) {
      return this.props.stores.stores.map(store => (
        <StoreCard
          key={store._id}
          storeName={store.name}
          shopImageUrl={store.logo}
          discountNumber={0}
          popularProduct={this.renderPopularProduct(store)}
          handleNavigation={() => this.goToSingleStore(store._id, store.name)}
        />
      ));
    } else {
      return <AppLoading />;
    }
  };

  render() {
    if (this.props.stores) {
      return (
        <View>
          <StatusBar barStyle="light-content" />
          <LinearGradient
            colors={['#FBBB3B', '#F19143']}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 100,
              alignItems: 'center',
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
          <View
            style={{
              height: '33%',
              width: '94%',
              borderTopColor: 'black',
              borderTopWidth: 1,
              alignSelf: 'center',
              marginTop: 7,
            }}
          />
        </View>
      );
    } else {
      return <AppLoading />;
    }
  }
}

export default connect(
  state => ({
    stores: state.stores,
  }),
  { fetchStores, loginAnon },
)(StoresScreen);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
  },
});
