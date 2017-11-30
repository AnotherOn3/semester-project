import Api from '../../Utils/api';
import { error } from 'util';

export const FETCH_STOREPRODUCTS_PENDING = 'FETCH_STOREPRODUCTS_PENDING';
export const FETCH_STOREPRODUCTS_SUCCESS = 'FETCH_STOREPRODUCTS_SUCCESS';
export const FETCH_STOREPRODUCTS_FAIL = 'FETCH_STOREPRODUCTS_FAIL';

function fetchStoreProductsRequest() {
  return {
    type: FETCH_STOREPRODUCTS_PENDING,
  };
}

function fetchStoreProductsSuccess(storeProducts) {
  return {
    type: FETCH_STOREPRODUCTS_SUCCESS,
    storeProducts: storeProducts,
  };
}

function fetchStoreProductsFail(error) {
  return {
    type: FETCH_STOREPRODUCTS_FAIL,
    error: error,
  };
}

export function fetchStoreProducts() {
  return function(dispatch) {
    return Api.getStoreProducts()
      .then(products => {
        dispatch(fetchStoreProductsSuccess(storeProducts));
      })
      .catch(error, dispatch => {
        dispatch(fetchStoreProductsFail(new Error(error)));
      });
  };
}
