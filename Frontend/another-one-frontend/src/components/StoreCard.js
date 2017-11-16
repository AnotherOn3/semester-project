import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const StoreCard = props => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardLeftContainer}>
        <Text style={styles.storeName}>{props.storeName}</Text>
        <Image
          style={styles.shopImageStyle}
          source={{ uri: props.shopImageUrl }}
        />
        <Text>{props.discountNumber} Discounts</Text>
      </View>
      <View style={styles.cardMiddleContainer}>
        <Text style={styles.popularDiscountsText}>Popular discounts</Text>
        <View style={styles.productInfoContainer}>
          <Image
            style={styles.imageStyle}
            source={{ uri: props.popularFirstImageUrl }}
          />
          <View style={styles.productInfo}>
            <View style={styles.test}>
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
      <View style={styles.cardRightContainer}>
        <Image style={styles.imageStyle} source={{ uri: props.chevronUrl }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    width: '94%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    height: 140,
  },
  cardLeftContainer: {
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    width: '30%',
  },
  cardMiddleContainer: {
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 1,
    width: '60%',
  },
  cardRightContainer: {
    backgroundColor: 'pink',
    justifyContent: 'center',
    width: '10%',
  },
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
  test: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  storeName: {
    fontSize: 16,
    marginBottom: 10,
  },
  shopImageStyle: {
    marginBottom: 10,
    height: 50,
    width: 50,
  },
  popularDiscountsText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default StoreCard;
