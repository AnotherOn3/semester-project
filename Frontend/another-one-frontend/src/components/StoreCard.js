import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const StoreCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardLeftContainer}>
        <Text>Fakta</Text>
        <Image
          style={styles.imageStyle}
          source={{ uri: 'https://placehold.it/30x30.png' }}
        />
        <Text>23 Discounts</Text>
      </View>
      <View style={styles.cardMiddleContainer}>
        <Text>Popular discounts</Text>
        <View>
          <Image
            style={styles.imageStyle}
            source={{ uri: 'https://placehold.it/30x30.png' }}
          />
          <View style={styles.row}>
            <Text>1</Text>
            <Text>kg </Text>
            <Text>oranges</Text>
          </View>
          <View style={styles.price}>
            <Text>20 ,-DKK</Text>
          </View>
        </View>
      </View>
      <View style={styles.cardRightContainer}>
        <Image
          style={styles.imageStyle}
          source={{ uri: 'https://placehold.it/30x30.png' }}
        />
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
