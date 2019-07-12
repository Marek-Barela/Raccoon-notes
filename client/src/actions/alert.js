import { SET_ALERT, REMOVE_ALERT } from "./types";
import uuid from "uuid";

export const setAlert = msg => dispatch => {
  const id = uuid.u4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, id }
  });
};
