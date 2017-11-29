import Api from '../../Utils/api';
import { error } from 'util';

export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL';

function fetchProductsRequest() {
  return {
    type: FETCH_PRODUCTS_PENDING,
  };
}

function fetchProductsSuccess(products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    products: products,
  };
}

function fetchProductsFail(error) {
  return {
    type: FETCH_PRODUCTS_FAIL,
    error: error,
  };
}

export function fetchProducts() {
  return function(dispatch) {
    return Api.getProducts()
      .then(products => {
        dispatch(fetchProductsSuccess(products));
      })
      .catch(error, dispatch => {
        dispatch(fetchProductsFail(new Error(error)));
      });
  };
}
