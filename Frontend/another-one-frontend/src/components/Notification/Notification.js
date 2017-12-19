import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Styles from '../../shared/styles';

const PopularProduct = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: 40,
    // width: 250,
    backgroundColor: '#29094A',
    right: 10,
    bottom: 270,
    zIndex: 999999,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    color: 'white',
    fontFamily: Styles.SemiBold,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default PopularProduct;
