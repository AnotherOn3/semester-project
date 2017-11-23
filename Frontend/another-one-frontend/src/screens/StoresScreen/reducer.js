import {
  FETCH_STORES_PENDING,
  FETCH_STORES_SUCCESS,
  FETCH_STORES_FAIL,
} from './actions';

const initState = {
  stores: [],
  error: 'no error',
  loading: true,
};
export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_STORES_PENDING:
      return initState;
    case FETCH_STORES_SUCCESS:
      return {
        stores: action.stores,
        loading: false,
        ...state,
      };
    case FETCH_STORES_FAIL:
      return {
        loading: false,
        error: 'fetchig stores failed',
        ...state,
      };
    default:
      return state;
  }
};
