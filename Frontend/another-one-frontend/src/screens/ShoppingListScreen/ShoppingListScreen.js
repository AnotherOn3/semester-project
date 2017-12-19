import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Platform,
  Text,
  AsyncStorage,
} from 'react-native';
import { connect } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import Header from '../../components/Header/Header';
import { fetchProducts } from '../ProductsScreen/actions';
import { LinearGradient } from 'expo';
import ClearButton from '../../components/Button/ClearButton';
import Styles from '../../shared/styles';

class ShoppingListScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: (
      <Header
        title="Shopping List"
        imageUri={require('../../../assets/images/shopping-list-inactive.png')}
      />
    ),
  });

  state = {
    items: [],
    error: '',
    loading: true,
    price: 0,
  };

  async componentDidMount() {
    const storage = await AsyncStorage.getItem('items');
    const parsedStorage = JSON.parse(storage);
    this.setState({
      items: parsedStorage,
      error: '',
      loading: false,
    });
  }

  removeItem = async index => {
    const storage = await AsyncStorage.getItem('items');
    let parsedStorage = await JSON.parse(storage);
    parsedStorage.splice(index, 1);
    await AsyncStorage.setItem('items', JSON.stringify(parsedStorage));
    await this.setState({
      items: parsedStorage,
      error: '',
      loading: false,
    });
  };

  clearItems = async () => {
    await AsyncStorage.setItem('items', '[]');
    await this.setState({
      items: [],
      error: '',
      loading: false,
    });
  };

  renderProductCard = () => {
    const { items } = this.state;
    if (this.state.items) {
      return this.state.items.map((item, index) => (
        <ProductCard
          key={(item.id, index)}
          productName={item.name}
          shopImageUrl={item.shopImage}
          productImageUrl={item.image}
          productQuantity={item.quantity}
          productQuantityType={item.quantityType}
          productPrice={item.price}
          cardTitle="-"
          handleStorage={() => this.removeItem(index)}
        />
      ));
    }
  };

  renderPrice = () => {
    let price = 0;
    this.state.items.map(item => {
      price += item.price;
    });
    return price;
    this.setState({ price: price });
  };

  render() {
    if (this.state.items) {
      return (
        <View style={{ flex: 1 }}>
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
          <View
            style={{
              width: '94%',
              height: '10%',
              borderTopColor: 'black',
              borderTopWidth: 2,
              alignSelf: 'center',
              marginTop: 7,
            }}
          />
        </View>
      );
    } else {
      return <Text>Loading...</Text>;
    }
  }
}

export default ShoppingListScreen;

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
