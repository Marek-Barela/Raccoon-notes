import { GET_NOTES, GET_NOTES_ERROR } from "../actions/types";

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
    default: {
      return { ...state };
    }
  }
};
