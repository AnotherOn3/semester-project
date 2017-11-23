import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middlewares = [thunk];
//we are creating store which can handle promise
export default createStore(
  reducers,
  undefined,
  compose(applyMiddleware(...middlewares)),
);
