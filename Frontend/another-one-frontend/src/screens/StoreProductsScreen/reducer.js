import {
  FETCH_STOREPRODUCTS_PENDING,
  FETCH_STOREPRODUCTS_SUCCESS,
  FETCH_STOREPRODUCTS_FAIL,
} from './actions';

const initState = {
  storeProducts: {}, //not an array but an empty object
  error: '',
  loading: true,
};
export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_STOREPRODUCTS_PENDING:
      return initState;
    case FETCH_STOREPRODUCTS_SUCCESS:
      return {
        ...state,
        storeProducts: action.storeProducts,
        loading: false,
      };
    case FETCH_STOREPRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Fetching products failed',
      };
    default:
      return state;
  }
};
