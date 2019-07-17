import { SET_NOTE_IN_EDITOR, CANCEL_CHANGES } from "./types";

export const setNoteInEditor = ({ _id, title, text }) => dispatch => {
  dispatch({
    type: SET_NOTE_IN_EDITOR,
    payload: { _id, title, text }
  });
};

export const cancelEditorChanges = () => dispatch => {
  dispatch({
    type: CANCEL_CHANGES
  });
};
