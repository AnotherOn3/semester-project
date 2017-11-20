import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Styles from '../shared/styles';

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
        <Text
          style={{
            fontFamily: Styles.SemiBold,
            textAlign: 'center',
          }}
        >
          {props.discountNumber} Discounts
        </Text>
      </View>
      <View style={styles.cardMiddleContainer}>
        <Text style={styles.popularDiscountsText}>Popular discounts</Text>
        <PopularProduct
          imageUrl="https://placehold.it/40x40.png"
          quantity="100"
          quantityType="kg"
          price="20"
          productName="Cuba oranf gsaogas igjsadoisa jioga"
        />
        <PopularProduct
          imageUrl="https://placehold.it/40x40.png"
          quantity="2"
          quantityType="l"
          price="20"
          productName="water fsafasfs  fasfasfas  fsaasfas  fas"
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
    height: 180,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 6,
  },
  cardLeftContainer: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    paddingTop: 12,
    width: '30%',
    height: '100%',
  },
  cardMiddleContainer: {
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 1,
    paddingTop: 12,
    paddingLeft: 12,
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
    fontFamily: Styles.SemiBold,
  },
  shopImageStyle: {
    marginBottom: 10,
    height: 50,
    width: 50,
  },
  popularDiscountsText: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: Styles.SemiBold,
  },
  chevronStyle: {
    width: 20,
    height: 20,
  },
});

export default StoreCard;
