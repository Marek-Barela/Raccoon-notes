import axios from "axios";
import {
  GET_NOTES,
  GET_NOTES_ERROR,
  UPDATE_NOTES,
  SET_UPDATED_NOTE_IN_EDITOR,
  SET_NEW_NOTE,
  DELETE_NOTE
} from "./types";

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

export const updateUserNotes = (id, title, text) => async dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  if (title.length === 0) {
    title = "Untitled";
  }
  const body = JSON.stringify({ title, text });

  try {
    await axios.put(`/api/notes/${id}`, body, config);

    dispatch({
      type: UPDATE_NOTES,
      payload: { id, title, text }
    });
    dispatch({
      type: SET_UPDATED_NOTE_IN_EDITOR,
      payload: { _id: id, title, text }
    });
  } catch (err) {
    console.log(err);
  }
};

export const createNewNote = () => async dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  const body = JSON.stringify({ title: "Untitled", text: "" });

  try {
    const res = await axios.post(`/api/notes`, body, config);

    dispatch({
      type: SET_NEW_NOTE,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteCurrentNote = id => async dispatch => {
  try {
    await axios.delete(`/api/notes/${id}`);
    dispatch({
      type: DELETE_NOTE,
      payload: id
    });
  } catch (err) {
    console.log(err);
  }
};
