import {
  SET_NOTE_IN_EDITOR,
  SET_UPDATED_NOTE_IN_EDITOR,
  CANCEL_CHANGES,
  LOGOUT
} from "../actions/types";

const initialState = {
  id: null,
  title: "",
  text: "",
  editorIsOpen: false,
  activeNote: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_NOTE_IN_EDITOR:
    case SET_UPDATED_NOTE_IN_EDITOR: {
      const { _id, title, text } = payload;
      return {
        ...state,
        id: _id,
        title,
        text,
        editorIsOpen: true,
        activeNote: _id
      };
    }
    case LOGOUT: {
      return {
        ...state,
        id: null,
        title: "",
        text: "",
        editorIsOpen: false,
        activeNote: null
      };
    }
    case CANCEL_CHANGES: {
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
