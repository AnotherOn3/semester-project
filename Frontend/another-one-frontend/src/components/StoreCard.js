import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import PopularProduct from './PopularProduct';

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
        <PopularProduct
          imageUrl="https://placehold.it/30x30.png"
          quantity="1"
          quantityType="kg"
          productName="oranges"
        />
        <PopularProduct
          imageUrl="https://placehold.it/30x30.png"
          quantity="2"
          quantityType="l"
          productName="water"
        />
      </View>
      <View style={styles.cardRightContainer}>
        <Image style={styles.chevronStyle} source={{ uri: props.chevronUrl }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    width: '94%',
    height: 140,
  },
  cardLeftContainer: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    width: '30%',
    height: '100%',
  },
  cardMiddleContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 1,
    width: '60%',
    height: '100%',
  },
  cardRightContainer: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    width: '10%',
    height: '100%',
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
  chevronStyle: {
    width: 20,
    height: 20,
  },
});

export default StoreCard;
