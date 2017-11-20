import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Styles from '../shared/styles';

const PopularProduct = props => {
  return (
    <View>
      <View style={styles.productInfoContainer}>
        <Image style={styles.imageStyle} source={{ uri: props.imageUrl }} />
        <View style={styles.productInfo}>
          <View style={styles.product}>
            <Text numberOfLines={1} style={{ fontFamily: Styles.Light }}>
              {props.quantity}
              {props.quantityType} {props.productName}
            </Text>
          </View>
          <View style={styles.price}>
            <Text style={{ fontFamily: Styles.Regular }}>
              {props.price} ,-DKK
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productInfoContainer: {
    flexDirection: 'row',
    paddingBottom: 18,
  },
  productInfo: {
    flexDirection: 'column',
    minWidth: '60%',
    flex: 0.8,
    marginLeft: 10,
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
