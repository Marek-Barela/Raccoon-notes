import { SET_NOTE_IN_EDITOR } from "./types";

export const setNoteInEditor = ({ _id, title, text }) => dispatch => {
  const payload = {
    _id,
    title,
    text
  };
  dispatch({
    type: SET_NOTE_IN_EDITOR,
    payload
  });
};
