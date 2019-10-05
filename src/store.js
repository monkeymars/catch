import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import logger from 'redux-logger';
import cart from './redux/reducers/cart.reducer'

const enhancer = compose(
    applyMiddleware(logger)
);
export default createStore(
  combineReducers({ cart }), {}, enhancer
);