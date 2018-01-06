import {
  ADD_ITEM_ERROR,
  ADD_ITEM_PENDING,
  ADD_ITEM_SUCCESS,
  CLEAR_ITEMS,
  REMOVE_ITEM,
  CLEAR_PRODUCTS_NOTIFICATION,
  CLEAR_SHOPPING_LIST_NOTIFICATION,
  CLEAR_STORE_PRODUCTS_NOTIFICATION,
} from './actions';

const initState = {
  shoppingList: [],
  error: '',
  loading: true,
  productsNotification: '',
  shoppingListNotification: '',
  storeProductsNotification: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_ITEM_PENDING:
      return initState;
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        shoppingList: [...state.shoppingList, action.payload],
        loading: false,
        productsNotification: `${
          action.payload.Name
        } has been added to shopping list`,
        storeProductsNotification: `${
          action.payload.Name
        } has been added to shopping list`,
      };
    case ADD_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Adding items to shopping list failed',
      };
    case CLEAR_ITEMS:
      return {
        ...state,
        shoppingList: [],
        loading: false,
      };
    case REMOVE_ITEM:
      return {
        ...state,
        shoppingListNotification: '',
        shoppingList: [
          ...state.shoppingList.slice(0, action.payload.index),
          ...state.shoppingList.slice(action.payload.index + 1),
        ],
        loading: false,
      };
    case CLEAR_PRODUCTS_NOTIFICATION:
      return {
        ...state,
        productsNotification: '',
      };
    case CLEAR_SHOPPING_LIST_NOTIFICATION:
      return {
        ...state,
        shoppingListNotification: '',
      };
    case CLEAR_STORE_PRODUCTS_NOTIFICATION:
      return {
        ...state,
        storeProductsNotification: '',
      };
    default:
      return state;
  }
};
