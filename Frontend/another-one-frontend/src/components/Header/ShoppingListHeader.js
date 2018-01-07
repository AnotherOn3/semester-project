import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Styles from '../../shared/styles';
import { LinearGradient } from 'expo';

const ShoppingListHeader = props => (
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
    <TouchableWithoutFeedback onPress={props.goBack}>
      <Image style={styles.chevron} source={props.chevronBack} />
    </TouchableWithoutFeedback>
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
    flexDirection: 'row',
    overflow: 'hidden',
  },
  image: {
    opacity: 0.6,
    height: 45,
    width: 45,
    position: 'absolute',
    top: '40%',
    left: '70%',
  },
  title: {
    fontFamily: Styles.SemiBold,
    color: 'white',
    fontSize: 20,
    backgroundColor: 'transparent',
  },
  chevron: {
    position: 'absolute',
    left: 30,
  },
});

export default ShoppingListHeader;
