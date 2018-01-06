import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import StoreProductCard from '../../components/StoreProductCard/StoreProductCard';
import Header from '../../components/Header/Header';
import { fetchStoreProducts } from './actions';
import Notification from '../../components/Notification/Notification';
import {
  addItem,
  clearStoreProductsNotification,
} from '../ShoppingListScreen/actions';
import Api from '../../Utils/api';
import { LinearGradient, AppLoading } from 'expo';

class StoreProductsScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: (
      <Header
        goBack={() => navigation.goBack()}
        chevronBack={require('../../../assets/images/chevron-back.png')}
        title={navigation.state.params.name}
        imageUri={require('../../../assets/images/store-inactive.png')}
      />
    ),
  });

  state = {
    data: {},
    loaded: false,
  };

  async componentDidMount() {
    setInterval(() => {
      this.props.clearStoreProductsNotification();
    }, 5000);
    const { id } = this.props.navigation.state.params;
    const data = await Api.getStoreProducts(id);
    this.setState({ data: data, loaded: true });
  }

  renderStoreProductCard = () => {
    const store = this.state.data;
    if (this.state.loaded) {
      return store.Product.map(product => (
        <StoreProductCard
          key={product.Id}
          productName={product.Name}
          productImageUrl={product.Picture}
          productQuantity={product.Quantity}
          productQuantityType={product.Type}
          productPrice={product.Price}
          handleStorage={() => this.props.addItem(product)}
        />
      ));
    } else {
      return <AppLoading />;
    }
  };

  renderNotification = () => {
    if (this.props.shoppingList.storeProductsNotification !== '') {
      return (
        <Notification
          hide={() => this.props.clearStoreProductsNotification()}
          text={this.props.shoppingList.storeProductsNotification}
        />
      );
    } else {
      return null;
    }
  };

  render() {
    if (this.state.data) {
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
            {this.renderStoreProductCard()}
          </ScrollView>
          <View
            style={{
              width: '94%',
              height: '30%',
              borderTopColor: 'black',
              borderTopWidth: 2,
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
    storeProducts: state.storeProducts,
    shoppingList: state.shoppingList,
  }),
  { fetchStoreProducts, addItem, clearStoreProductsNotification },
)(StoreProductsScreen);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
