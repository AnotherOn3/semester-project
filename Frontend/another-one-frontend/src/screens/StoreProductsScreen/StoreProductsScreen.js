import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import StoreProductCard from '../../components/StoreProductCard/StoreProductCard';
import Header from '../../components/Header/Header';
import { fetchStoreProducts } from './actions';
import Api from '../../Utils/api';
import { LinearGradient } from 'expo';

class StoreProductsScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: (
      <Header
        title={navigation.state.params.name}
        imageUri={require('../../../assets/images/store-inactive.png')}
      />
    ),
  });

  state = {
    data: {},
  };

  async componentDidMount() {
    const { id } = this.props.navigation.state.params;
    const data = await Api.getStoreProducts(id);
    this.setState({ data });
  }

  renderStoreProductCard = () => {
    if (this.state.data) {
      const store = this.state.data[0];
      if (store !== undefined) {
        return store.storeProducts.map(product => (
          <StoreProductCard
            key={product.id}
            productName={product.name}
            productImageUrl={product.image}
            productQuantity={product.quantity}
            productQuantityType={product.quantityType}
            productPrice={product.price}
          />
        ));
      } else {
        console.log('I am undefined');
      }
    } else {
      console.log('HEllo');
    }
  };

  render() {
    if (this.state.data) {
      return (
        <View>
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
