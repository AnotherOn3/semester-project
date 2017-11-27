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
  console.log(action);
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
        error: 'Fetching stores failed',
        ...state,
      };
    default:
      return state;
  }
};
