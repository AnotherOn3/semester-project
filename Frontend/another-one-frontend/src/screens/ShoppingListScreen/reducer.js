import {
  ADD_ITEM_ERROR,
  ADD_ITEM_PENDING,
  ADD_ITEM_SUCCESS,
  CLEAR_ITEMS,
  REMOVE_ITEM,
} from './actions';

const initState = {
  shoppingList: [],
  error: '',
  loading: true,
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
      console.log(action.payload);
      return {
        ...state,
        shoppingList: [
          ...state.shoppingList.slice(0, action.payload),
          ...state.shoppingList.slice(action.payload + 1),
        ],
        loading: false,
      };
    default:
      return state;
  }
};
