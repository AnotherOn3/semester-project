import React from 'react';
import { View, ScrollView, StyleSheet, Platform, Text } from 'react-native';
import { connect } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import ShoppingListHeader from '../../components/Header/ShoppingListHeader';
import { fetchProducts } from '../ProductsScreen/actions';
import { LinearGradient } from 'expo';
import ClearButton from '../../components/Button/ClearButton';
import Styles from '../../shared/styles';
import {
  addItem,
  clearItems,
  removeItem,
  clearShoppingListNotification,
} from './actions';
import ShoppingListNotification from '../../components/Notification/ShoppingListNotification';
import EmptyScreen from '../../components/EmptyScreen/EmptyScreen';

class ShoppingListScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: (
      <ShoppingListHeader
        title="Shopping List"
        imageUri={require('../../../assets/images/shopping-list-inactive-header.png')}
      />
    ),
  });

  componentDidMount() {
    setInterval(() => {
      this.props.clearShoppingListNotification();
    }, 5000);
  }

  state = {
    price: 0,
  };

  deleteItem = (item, index) => {
    this.props.removeItem(item, index);
  };

  clearItems = () => {
    this.props.clearItems();
  };

  renderNotification = () => {
    if (this.props.shoppingList.shoppingListNotification !== '') {
      return (
        <ShoppingListNotification
          hide={() => this.props.clearShoppingListNotification()}
          text={this.props.shoppingList.shoppingListNotification}
        />
      );
    } else {
      return null;
    }
  };

  renderProductCard = () => {
    const { shoppingList } = this.props.shoppingList;
    if (shoppingList.length > 0) {
      return shoppingList.map((item, index) => (
        <ProductCard
          key={(item.Id, index)}
          productName={item.Name}
          shopImageUrl={item.StoreImage}
          productImageUrl={item.Picture}
          productQuantity={item.Quantity}
          productQuantityType={item.Type}
          productPrice={item.Price}
          cardTitle="-"
          handleStorage={() => this.deleteItem(item, index)}
        />
      ));
    } else {
      return <EmptyScreen />;
    }
  };

  renderPrice = () => {
    let price = 0;
    this.props.shoppingList.shoppingList.map(item => {
      price += item.Price;
    });
    return price;
    this.setState({ price: price });
  };

  renderBottom = () => {
    if (this.props.shoppingList.shoppingList.length > 0) {
      return (
        <View style={styles.bottomContainer}>
          <View>
            <ClearButton
              handleClick={() => this.clearItems()}
              Title="Clear all"
            />
          </View>
          <View>
            <Text style={styles.text}>Full price:</Text>
            <Text style={styles.text}>{this.renderPrice()} ,-DKK</Text>
          </View>
        </View>
      );
    } else {
      return null;
    }
  };

  render() {
    if (this.props.shoppingList.shoppingList) {
      return (
        <View style={{ flex: 1 }}>
          {this.renderNotification()}
          <LinearGradient
            colors={['#FBBB3B', '#F19143']}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
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
          {this.renderBottom()}
          <View
            style={{
              width: '94%',
              height: '10%',
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
    shoppingList: state.shoppingList,
  }),
  { addItem, clearItems, removeItem, clearShoppingListNotification },
)(ShoppingListScreen);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
  },
  bottomContainer: {
    marginTop: 10,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 16,
    color: 'white',
    fontFamily: Styles.SemiBold,
    textAlign: 'right',
  },
});
