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
  };

  async componentDidMount() {
    const storage = await AsyncStorage.getItem('items');
    const parsedStorage = await JSON.parse(storage);
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

  renderProductCard = () => {
    const { items } = this.state;
    if (items) {
      return items.map((item, index) => (
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

  render() {
    if (this.state.items) {
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
});
