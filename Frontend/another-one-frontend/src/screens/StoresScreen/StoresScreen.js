import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import StoreCard from '../../components/StoreCard/StoreCard';
import { fetchStores } from './actions';

class StoresScreen extends React.Component {
  componentDidMount() {
    this.props.fetchStores();
  }
  render() {
    return <StoreCard />;
  }
}

const mapStateToProps = state => {
  return {
    stores: state.stores,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onScreenLoad: () => {
      dispatch(fetchStores);
    },
  };
};

const StoreScreen = connect(mapStateToProps, mapDispatchToProps)(StoreScreen);

export default StoreScreen;
