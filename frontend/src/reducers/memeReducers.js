import {
    MEME_REQUEST,
    MEME_SUCCESS,
    MEME_FAIL

} from '../constants/memeConstants'

export const memePostReducer = (state = {}, action) => {
    switch (action.type) {
      case MEME_REQUEST:
        return { loading: true };
      case MEME_SUCCESS:
        return { loading: false, postStatus: action.payload };
      case MEME_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };