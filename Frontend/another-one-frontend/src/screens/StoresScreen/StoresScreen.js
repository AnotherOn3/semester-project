import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import StoreCard from '../../components/StoreCard/StoreCard';
import { fetchStores } from './actions';

class StoresScreen extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchStores();
  }
  render() {
    return <StoreCard />;
  }
}

export default connect(
  state => ({
    stores: state.stores,
  }),
  { fetchStores },
)(StoresScreen);
