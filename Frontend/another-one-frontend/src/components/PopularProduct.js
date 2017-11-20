import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PopularProduct = props => {
  return (
    <View>
      <View style={styles.productInfoContainer}>
        <Image style={styles.imageStyle} source={{ uri: props.imageUrl }} />
        <View style={styles.productInfo}>
          <View style={styles.product}>
            <Text numberOfLines={2}>
              {props.quantity}
              {props.quantityType} {props.productName}
            </Text>
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
    paddingBottom: 12,
  },
  productInfo: {
    flexDirection: 'column',
    minWidth: '60%',
    borderColor: 'red',
    borderWidth: 1,
    flex: 0.9,
  },
  imageStyle: {
    height: 40,
    width: 40,
  },
  row: {
    flexDirection: 'row',
  },
  price: {
    alignItems: 'flex-end',
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default PopularProduct;
