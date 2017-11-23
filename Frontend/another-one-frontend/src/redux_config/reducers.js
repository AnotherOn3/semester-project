import { combineReducers } from 'redux';
import storesReducer from '../screens/StoresScreen/reducer';

export default combineReducers({
  stores: storesReducer,
});
