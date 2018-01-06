import {
  FETCH_STORES_PENDING,
  FETCH_STORES_SUCCESS,
  FETCH_STORES_FAIL,
  LOGIN_ANON_REQUEST,
  LOGIN_ANON_SUCCESS,
  LOGIN_ANON_ERROR,
} from './actions';

const initState = {
  stores: [],
  error: '',
  loading: true,
  user: {},
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
    case LOGIN_ANON_REQUEST:
      return initState;
    case LOGIN_ANON_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
      };
    case LOGIN_ANON_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Login failed',
      };
    default:
      return state;
  }
};
