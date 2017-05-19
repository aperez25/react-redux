import {SET_LYRICS} from '../constants';
import axios from 'axios';

export const setLyrics = (text) => {
  return {
      type: SET_LYRICS,
      lyric: text
  };
}

export const fetchLyrics = function (artist, song) {
  return function (dispatch, getState) {
    axios.get(`/api/lyrics/${artist}/${song}`)
      .then(res => {
        dispatch(setLyrics(res.data.lyric));
      });
  };
};

/* BUT WAIT THERE'S MORE! (may be helpful later on!) */

// const fetchAlbumsFromServer =() => {
//   return dispatch => {
//     axios.get('/api/albums')
//       .then(res => res.data)
//       // use the dispatch method the thunkMiddleware gave us
//       .then(albums => dispatch(receiveAlbumsFromServer(albums)));
//   }
// }

// const playSong = songId => {
//   return dispatch => {
//     // side effects, like using the audio element belong in async action creators too, even if they aren't "async"
//     audio.play()
//     dispatch(selectSong(songId));
//   }
// }

// const doSeveralThings = (stuffId, thingsId) => {
//   return dispatch => {
//     // we can also use async action creators to compose several actions into one!
//     dispatch(doStuff(stuffId));
//     dispatch(doThing(thingId));
//   }
// }

