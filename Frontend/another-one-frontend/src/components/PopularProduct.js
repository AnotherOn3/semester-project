import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Font } from 'expo';

class PopularProduct extends Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync([
      { Light: require('../../assets/fonts/Light.otf') },
      { Bold: require('../../assets/fonts/Bold.otf') },
      { Italic: require('../../assets/fonts/Italic.otf') },
      { Medium: require('../../assets/fonts/Medium.otf') },
      { Regular: require('../../assets/fonts/Regular.otf') },
      { SemiBold: require('../../assets/fonts/SemiBold.otf') },
    ]);
    this.setState({ fontLoaded: true });
  }
  render() {
    if (this.state.fontLoaded) {
      return (
        <View>
          <View style={styles.productInfoContainer}>
            <Image
              style={styles.imageStyle}
              source={{ uri: this.props.imageUrl }}
            />
            <View style={styles.productInfo}>
              <View style={styles.product}>
                <Text>{this.props.quantity}</Text>
                <Text>{this.props.quantityType} </Text>
                <Text style={styles.text}>{this.props.productName}</Text>
              </View>
              <View style={styles.price}>
                <Text>{this.props.price} ,-DKK</Text>
              </View>
            </View>
          </View>
        </View>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  productInfoContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  productInfo: {
    flexDirection: 'column',
  },
  imageStyle: {
    height: 30,
    width: 30,
  },
  row: {
    flexDirection: 'row',
  },
  price: {
    width: 100,
    alignItems: 'flex-end',
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  text: {
    fontFamily: 'Regular',
  },
});

export default PopularProduct;
