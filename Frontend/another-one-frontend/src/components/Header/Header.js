import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Styles from '../../shared/styles';
import { LinearGradient } from 'expo';

const Header = props => (
  <View style={styles.header}>
    <LinearGradient
      colors={['#190959', '#590921']}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        alignItems: 'center',
        flex: 1,
        width: '100%',
      }}
    />
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
    zIndex: 999999,
  },
  image: {
    opacity: 0.6,
    height: 50,
    width: 105,
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
