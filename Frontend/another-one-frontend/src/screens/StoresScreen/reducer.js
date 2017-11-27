import {
  FETCH_STORES_PENDING,
  FETCH_STORES_SUCCESS,
  FETCH_STORES_FAIL,
} from './actions';

const initState = {
  stores: [],
  error: '',
  loading: true,
};
export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_STORES_PENDING:
      return initState;
    case FETCH_STORES_SUCCESS:
      return {
        ...state,
        stores: action.stores,
        loading: false,
      };
    case FETCH_STORES_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Fetching stores failed',
      };
    default:
      return state;
  }
};
