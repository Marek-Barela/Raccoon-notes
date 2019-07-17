import {
  GET_NOTES,
  GET_NOTES_ERROR,
  LOGOUT,
  UPDATE_NOTES,
  SET_NEW_NOTE,
  DELETE_NOTE
} from "../actions/types";

const initialState = {
  notes: [],
  loading: true,
  error: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_NOTES:
      return {
        ...state,
        notes: payload,
        loading: false
      };
    case GET_NOTES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case UPDATE_NOTES: {
      const { id, title, text } = payload;

      return {
        ...state,
        notes: state.notes.map(note => {
          if (note._id === id) {
            return {
              ...note,
              title,
              text
            };
          }
          return note;
        })
      };
    }
    case SET_NEW_NOTE: {
      return {
        ...state,
        notes: [payload, ...state.notes]
      };
    }
    case DELETE_NOTE: {
      return {
        ...state,
        notes: state.notes.filter(note => {
          return note._id !== payload;
        })
      };
    }
    case LOGOUT: {
      return {
        ...state,
        notes: [],
        loading: true,
        error: {}
      };
    }
    default: {
      return { ...state };
    }
  }
};
