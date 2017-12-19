import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Styles from '../../shared/styles';

const ClearButton = props => {
  return (
    <TouchableOpacity
      onPress={props.handleClick}
      style={styles.ButtonContainer}
    >
      <View>
        <Text style={styles.ButtonTitle}>{props.Title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ButtonContainer: {
    backgroundColor: '#29094A',
    width: 85,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 6,
  },
  ButtonTitle: {
    color: 'white',
    fontSize: 20,
    fontFamily: Styles.SemiBold,
    fontSize: 14,
  },
});

export default ClearButton;
