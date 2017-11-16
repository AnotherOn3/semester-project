import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StoreCard from './src/components/StoreCard';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StoreCard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
