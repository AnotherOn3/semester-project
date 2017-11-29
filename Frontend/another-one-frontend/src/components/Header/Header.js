import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Styles from '../../shared/styles';

const Header = props => (
  <View style={styles.header}>
    <Image source={props.imageUri} style={styles.image} />
    <Text style={styles.title}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flex: 0.14,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    opacity: 0.6,
    height: 50,
    width: 105,
    borderWidth: 1,
    borderColor: 'white',
    position: 'absolute',
    top: '40%',
    left: '55%',
  },
  title: {
    fontFamily: Styles.SemiBold,
    color: 'white',
    fontSize: 20,
    backgroundColor: 'transparent',
  },
});

export default Header;
