import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const middlewares = [thunk];

if (__DEV__) {
  middlewares.push(createLogger());
}

//we are creating store which can handle promise
export default createStore(
  reducers,
  undefined,
  compose(applyMiddleware(...middlewares)),
);
