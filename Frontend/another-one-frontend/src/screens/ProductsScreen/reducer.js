import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
} from './actions';

const initState = {
  products: [],
  error: '',
  loading: true,
};
export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return initState;
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.products,
        loading: false,
      };
    case FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Fetching products failed',
      };
    default:
      return state;
  }
};
