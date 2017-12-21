import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Styles from '../../shared/styles';
import ClearButton from '../Button/ClearButton';
import { withNavigation } from 'react-navigation';

const EmptyScreen = props => {
  console.log(props);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../../../assets/images/shopping-list-inactive.png')}
        />
        <Text style={styles.text}>Oops! Your shopping list is empty</Text>
        <View style={{ marginTop: 20 }}>
          <ClearButton
            Title="Add items"
            handleClick={() => props.navigation.navigate('Products')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  text: {
    marginTop: 20,
    color: 'grey',
    fontFamily: Styles.SemiBold,
    marginLeft: 10,
    marginRight: 10,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50%',
    borderRadius: 8,
    elevation: 5,
    shadowColor: 'black',
    backgroundColor: '#f6f6f6',
    padding: 30,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowRadius: 6,
  },
});

export default withNavigation(EmptyScreen);
