import { GET_NOTES, GET_NOTES_ERROR, LOGOUT } from "../actions/types";

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
    case LOGOUT: {
      return {
        ...state,
        notes: [],
        loading: true,
        error: {}
      }
    }
    default: {
      return { ...state };
    }
  }
};
