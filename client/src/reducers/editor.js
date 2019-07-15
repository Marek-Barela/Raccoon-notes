import { SET_NOTE_IN_EDITOR, LOGOUT } from "../actions/types";

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
    case SET_NOTE_IN_EDITOR: {
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
    default: {
      return { ...state };
    }
  }
};
