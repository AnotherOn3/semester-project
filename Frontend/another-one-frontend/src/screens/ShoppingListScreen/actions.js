export const ADD_ITEM_PENDING = 'ADD_ITEM_PENDING';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_ERROR = 'ADD_ITEM_ERROR';
export const CLEAR_ITEMS = 'CLEAR_ITEMS';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAR_PRODUCTS_NOTIFICATION = 'CLEAR_PRODUCTS_NOTIFICATION';
export const CLEAR_SHOPPING_LIST_NOTIFICATION =
  'CLEAR_SHOPPING_LIST_NOTIFICATION';
export const CLEAR_STORE_PRODUCTS_NOTIFICATION =
  'CLEAR_STORE_PRODUCTS_NOTIFICATION';

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

function removeItemRequest(item, index) {
  return {
    type: REMOVE_ITEM,
    payload: { item, index },
  };
}

function clearProductsNotificationRequest() {
  return {
    type: CLEAR_PRODUCTS_NOTIFICATION,
  };
}

function clearShoppingListNotificationRequest() {
  return {
    type: CLEAR_SHOPPING_LIST_NOTIFICATION,
  };
}

function clearStoreProductsNotificationRequest() {
  return {
    type: CLEAR_STORE_PRODUCTS_NOTIFICATION,
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

export function removeItem(item, index) {
  return async function(dispatch) {
    return dispatch(removeItemRequest(item, index));
  };
}

export function clearProductsNotification() {
  return async function(dispatch) {
    return dispatch(clearProductsNotificationRequest());
  };
}

export function clearShoppingListNotification() {
  return async function(dispatch) {
    return dispatch(clearShoppingListNotificationRequest());
  };
}

export function clearStoreProductsNotification() {
  return async function(dispatch) {
    return dispatch(clearStoreProductsNotificationRequest());
  };
}
