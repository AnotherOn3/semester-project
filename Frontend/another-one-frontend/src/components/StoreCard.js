import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const StoreCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardLeftContainer}>
        <Text>Fakta</Text>
      </View>
      <View style={styles.cardRightContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'red',
  },
  cardLeftContainer: {
    backgroundColor: 'blue',
  },
  cardRightContainer: {
    backgroundColor: 'pink',
  },
});

export default StoreCard;
