import React from 'react';
import { View, ScrollView, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import PopularProduct from '../../components/PopularProduct/PopularProduct'; // we dont need this right?
import Header from '../../components/Header/Header';
import { fetchProducts } from './actions';
import { LinearGradient } from 'expo';
import { addItem, clearNotification } from '../ShoppingListScreen/actions';
import store from '../../redux_config/store';
import Notification from '../../components/Notification/Notification';

class ProductsScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: (
      <Header
        title="Products"
        imageUri={require('../../../assets/images/products-inactive.png')}
      />
    ),
  });

  componentDidMount() {
    this.props.fetchProducts();
    setInterval(() => {
      this.props.clearNotification();
    }, 5000);
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
          cardTitle="+"
          handleStorage={() => store.dispatch(addItem(product))}
        />
      ));
    }
  };

  renderNotification = () => {
    console.log(this.props.shoppingList.notification);
    if (this.props.shoppingList.notification !== '') {
      return <Notification text={this.props.shoppingList.notification} />;
    } else {
      return null;
    }
  };

  render() {
    if (this.props.products) {
      return (
        <View>
          {this.renderNotification()}
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
            {this.renderProductCard()}
          </ScrollView>
          <View
            style={{
              height: '30%',
              width: '94%',
              borderTopColor: 'black',
              borderTopWidth: 2,
              alignSelf: 'center',
              marginTop: 7,
            }}
          />
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
    shoppingList: state.shoppingList,
  }),
  { fetchProducts, addItem, clearNotification },
)(ProductsScreen);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
  },
});
