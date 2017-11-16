import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const StoreCard = props => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardLeftContainer}>
        <Text>{props.storeName}</Text>
        <Image style={styles.imageStyle} source={{ uri: props.shopImageUrl }} />
        <Text>{props.discountNumber} Discounts</Text>
      </View>
      <View style={styles.cardMiddleContainer}>
        <Text>Popular discounts</Text>
        <View>
          <Image
            style={styles.imageStyle}
            source={{ uri: props.popularFirstImageUrl }}
          />
          <View>
            <View style={styles.row}>
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
  },
  cardLeftContainer: {},
  cardMiddleContainer: {},
  cardRightContainer: {
    backgroundColor: 'pink',
    justifyContent: 'center',
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
});

export default StoreCard;
