import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import Styles from '../../shared/styles';

const PopularProduct = props => {
  return (
    <TouchableOpacity onPress={props.hide} style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: 40,
    // width: 250,
    backgroundColor: '#590921',
    right: 10,
    bottom: 124,
    zIndex: 999999,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 6,
  },
  text: {
    color: 'white',
    fontFamily: Styles.SemiBold,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default PopularProduct;
