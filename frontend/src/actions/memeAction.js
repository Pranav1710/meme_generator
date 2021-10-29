import Axios from "axios";
import {
    MEME_REQUEST,
    MEME_SUCCESS,
    MEME_FAIL

} from '../constants/memeConstants'

export const createPost = (filename) => async (dispatch, getState) => {
    try {
      dispatch({ type: MEME_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await Axios.post(
        "http://localhost:5000/api/memes/post",
        { filename },
        config
      );
  
      dispatch({ type: MEME_SUCCESS, payload: "Meme Posted" });
  
    //   localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: MEME_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };