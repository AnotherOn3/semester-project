import React from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';
import Styles from '../../shared/styles';

class SearchOptionButton extends React.Component {
  state = {
    active: false,
  };
  handleClick = () => {
    this.setState({ active: !this.state.active });
  };
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.handleClick}>
        {/* This is a if/else statement done with ternary expression */}
        <View
          style={
            this.state.active
              ? styles.ButtonContainer
              : styles.ButtonContainerInActive
          }
        >
          <Text
            numberOfLines={1}
            style={
              this.state.active
                ? styles.ButtonTitle
                : styles.ButtonTitleInActive
            }
          >
            {this.props.categoryName}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  ButtonContainer: {
    backgroundColor: '#29094A',
    borderColor: '#29094A',
    borderWidth: 2,
    width: 105,
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
  ButtonContainerInActive: {
    borderColor: '#29094A',
    borderWidth: 2,
    width: 105,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  ButtonTitle: {
    margin: 5,
    color: 'white',
    fontSize: 15,
    fontFamily: Styles.SemiBold,
  },
  ButtonTitleInActive: {
    margin: 5,
    backgroundColor: 'transparent',
    color: '#29094A',
    fontSize: 15,
    fontFamily: Styles.SemiBold,
  },
});

export default SearchOptionButton;
