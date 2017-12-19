export const ADD_ITEM_PENDING = 'ADD_ITEM_PENDING';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_ERROR = 'ADD_ITEM_ERROR';
export const CLEAR_ITEMS = 'CLEAR_ITEMS';
export const REMOVE_ITEM = 'REMOVE_ITEM';

function addItemRequest(item) {
  return {
    type: ADD_ITEM_PENDING,
    item,
  };
}

function addItemSuccess(item) {
  return {
    type: ADD_ITEM_SUCCESS,
    payload: item,
  };
}

function addItemError(error) {
  return {
    type: ADD_ITEM_ERROR,
    error,
  };
}

function clearItemsRequest() {
  return {
    type: CLEAR_ITEMS,
  };
}

function removeItemRequest(item) {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
}

export function addItem(item) {
  return async function(dispatch) {
    try {
      return dispatch(addItemSuccess(item));
    } catch (error) {
      return dispatch(addItemError(error));
    }
  };
}

export function clearItems() {
  return async function(dispatch) {
    return dispatch(clearItemsRequest());
  };
}

export function removeItem(item) {
  console.log(item);
  return async function(dispatch) {
    return dispatch(removeItemRequest(item));
  };
}
