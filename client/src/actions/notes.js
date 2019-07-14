import axios from "axios";
import { GET_NOTES, GET_NOTES_ERROR } from "./types";

export const getUserNotes = userID => async dispatch => {
  try {
    const res = await axios.get(`/api/notes/${userID}`);

    dispatch({
      type: GET_NOTES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_NOTES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
