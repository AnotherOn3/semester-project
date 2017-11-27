import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import StoreCard from '../../components/StoreCard/StoreCard';
import { fetchStores } from './actions';

class StoresScreen extends React.Component {
  componentDidMount() {
    this.props.fetchStores();
  }

  renderStoreCard = () => {
    console.log('renderStoreCard', this.props.stores.stores);
    if (this.props.stores) {
      return this.props.stores.stores.map(store => (
        <StoreCard
          key={store.id}
          storeName={store.name}
          shopImageUrl={store.image}
          discountNumber={store.discountNumber}
        />
      ));
    }
  };

  render() {
    if (this.props.stores) {
      return <View>{this.renderStoreCard()}</View>;
    } else {
      return <View>Loading...</View>;
    }
  }
}

export default connect(
  state => ({
    stores: state.stores,
  }),
  { fetchStores },
)(StoresScreen);
