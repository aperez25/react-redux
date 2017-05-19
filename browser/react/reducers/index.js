import { combineReducers } from 'redux';
import lyricsReducer from './lyrics-reducer';
import playerReducer from './player-reducer';
import artistReducer from './artist-reducer';

export default combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer,
  artist: artistReducer
})
