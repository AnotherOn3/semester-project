import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PopularProduct = props => {
  return (
    <View>
      <View style={styles.productInfoContainer}>
        <Image style={styles.imageStyle} source={{ uri: props.imageUrl }} />
        <View style={styles.productInfo}>
          <View style={styles.product}>
            <Text>{props.quantity}</Text>
            <Text>{props.quantityType} </Text>
            <Text>{props.productName}</Text>
          </View>
          <View style={styles.price}>
            <Text>{props.price} ,-DKK</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productInfoContainer: {
    flexDirection: 'row',
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
});

export default PopularProduct;
