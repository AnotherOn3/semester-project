import Api from '../../Utils/api';
import { error } from 'util';

export const FETCH_STORES_PENDING = 'FETCH_STORES_PENDING';
export const FETCH_STORES_SUCCESS = 'FETCH_STORES_SUCCESS';
export const FETCH_STORES_FAIL = 'FETCH_STORES_FAIL';

function fetchStoresRequest() {
  return {
    type: FETCH_STORES_PENDING,
  };
}

function fetchStoresSuccess(stores) {
  return {
    type: FETCH_STORES_SUCCESS,
    stores: stores,
  };
}

function fetchStoresFail(error) {
  return {
    type: FETCH_STORES_FAIL,
    error: error,
  };
}

export function fetchStores() {
  return function(dispatch) {
    return Api.getStores()
      .then(stores => {
        dispatch(fetchStoresSuccess(stores));
      })
      .catch(error, dispatch => {
        dispatch(fetchStoresFail(new Error(error)));
      });
  };
}
