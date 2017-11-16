import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StoreCard from './src/components/StoreCard';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StoreCard
          storeName="Fakta"
          discountNumber="23"
          quantity="1"
          quantityType="kg"
          productName="oranges"
          price="20"
          shopImageUrl="https://placehold.it/50x50.png"
          popularFirstImageUrl="https://placehold.it/50x50.png"
          chevronUrl="https://placehold.it/10x10.png"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
