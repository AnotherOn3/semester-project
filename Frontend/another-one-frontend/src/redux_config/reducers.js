import { combineReducers } from 'redux';
import storesReducer from '../screens/StoresScreen/reducer';
import productsReducer from '../screens/ProductsScreen/reducer';
import storeProductsReducer from '../screens/StoreProductsScreen/reducer';

export default combineReducers({
  stores: storesReducer,
  products: productsReducer,
  storeProducts: storeProductsReducer,
});
