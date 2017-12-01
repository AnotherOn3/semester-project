import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Styles from '../../shared/styles';

import PopularProduct from '../PopularProduct/PopularProduct';

const StoreCard = props => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardLeftContainer}>
        <Text style={styles.storeName}>{props.storeName}</Text>
        <Image
          style={styles.shopImageStyle}
          source={{ uri: props.shopImageUrl }}
        />
        <View>
          <Text
            style={{
              fontFamily: Styles.SemiBold,
              textAlign: 'center',
            }}
          >
            {props.discountNumber}
          </Text>
          <Text
            style={{
              fontFamily: Styles.SemiBold,
              textAlign: 'center',
            }}
          >
            Discounts
          </Text>
        </View>
      </View>
      <View style={styles.cardMiddleContainer}>
        <Text style={styles.popularDiscountsText}>Popular discounts</Text>
        <View>{props.popularProduct}</View>
      </View>

      <View style={styles.cardRightContainer}>
        <TouchableWithoutFeedback onPress={props.handleNavigation}>
          <Image
            style={styles.chevronStyle}
            source={{ uri: 'https://placehold.it/20x20.png' }}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '94%',
    marginBottom: 10,
    marginTop: 10,
    height: 156,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowRadius: 6,
  },
  cardLeftContainer: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    paddingTop: 12,
    width: '30%',
    height: '100%',
  },
  cardMiddleContainer: {
    backgroundColor: 'white',
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
    alignItems: 'center',
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
