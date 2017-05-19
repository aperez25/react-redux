import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';
import artistReducer from './reducers/artist-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer,
  artists: artistReducer
  }),
  composeEnhancers(applyMiddleware(loggerMiddleware, thunkMiddleware)));



export default store;
