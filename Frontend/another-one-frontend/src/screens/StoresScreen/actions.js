import Api from '../../Utils/api';
import { error } from 'util';
import firebase from 'firebase';

export const FETCH_STORES_PENDING = 'FETCH_STORES_PENDING';
export const FETCH_STORES_SUCCESS = 'FETCH_STORES_SUCCESS';
export const FETCH_STORES_FAIL = 'FETCH_STORES_FAIL';
export const LOGIN_ANON_REQUEST = 'LOGIN_ANON_REQUEST';
export const LOGIN_ANON_SUCCESS = 'LOGIN_ANON_SUCCESS';
export const LOGIN_ANON_ERROR = 'LOGIN_ANON_ERROR';

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

function loginAnonRequest() {
  return {
    type: LOGIN_ANON_REQUEST,
  };
}

function loginAnonSuccess(user) {
  return {
    type: LOGIN_ANON_SUCCESS,
    payload: user,
  };
}

function loginAnonError(error) {
  return {
    type: LOGIN_ANON_ERROR,
    payload: error,
  };
}

export function loginAnon() {
  return async dispatch => {
    await firebase.auth().signInAnonymously();
    dispatch(loginAnonRequest());
    try {
      firebase.auth().onAuthStateChanged(async user => {
        return await dispatch(loginAnonSuccess(user));
      });
    } catch (error) {
      return await dispatch(loginAnonError(error));
    }
  };
}
