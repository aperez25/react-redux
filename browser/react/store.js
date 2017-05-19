import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import combineReducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers,
  composeEnhancers(applyMiddleware(loggerMiddleware, thunkMiddleware)));

export default store;
