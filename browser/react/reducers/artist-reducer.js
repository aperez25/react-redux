import { RECEIVE_ARTISTS, RECEIVE_ARTIST } from '../constants'

export const initialArtistState = {
  artists: [],
  selectedArtist: {}
};

export default function(state = initialArtistState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ARTIST:
      newState.selectedArtist =
      action.selectedArtist;
      break;

    case RECEIVE_ARTISTS:
      newState.artists =
      action.artists;
      break;

    default:
      return state;
  }

  return newState;
}
