import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import PopularProduct from '../../components/PopularProduct/PopularProduct'; // we dont need this right?
import ProductsHeader from '../../components/Header/ProductsHeader';
import { fetchProducts } from './actions';
import { LinearGradient, AppLoading } from 'expo';
import {
  addItem,
  clearProductsNotification,
} from '../ShoppingListScreen/actions';
import store from '../../redux_config/store';
import Notification from '../../components/Notification/Notification';

class ProductsScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: (
      <ProductsHeader
        title="Products"
        imageUri={require('../../../assets/images/products-inactive-header.png')}
      />
    ),
  });

  componentDidMount() {
    this.props.fetchProducts();
    setInterval(() => {
      this.props.clearProductsNotification();
    }, 5000);
  }

  renderProductCard = () => {
    if (this.props.products) {
      return this.props.products.products.map(product => (
        <ProductCard
          key={product.Id}
          productName={product.Name}
          shopImageUrl={product.StoreImage}
          productImageUrl={product.Picture}
          productQuantity={product.Quantity}
          productQuantityType={product.Type}
          productPrice={product.Price}
          cardTitle="+"
          handleStorage={() => store.dispatch(addItem(product))}
        />
      ));
    } else {
      return <AppLoading />;
    }
  };

  renderNotification = () => {
    if (this.props.shoppingList.productsNotification !== '') {
      return (
        <Notification
          hide={() => this.props.clearProductsNotification()}
          text={this.props.shoppingList.productsNotification}
        />
      );
    } else {
      return null;
    }
  };

  render() {
    if (this.props.products) {
      return (
        <View>
          <StatusBar barStyle="light-content" />
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
    products: state.products,
    shoppingList: state.shoppingList,
  }),
  { fetchProducts, addItem, clearProductsNotification },
)(ProductsScreen);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
  },
});
