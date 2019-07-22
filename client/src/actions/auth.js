import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_NEW_NOTE,
  LOGOUT
} from "./types";
import setAuthToken from "../utils/setAuthToken";

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  const body = JSON.stringify({ name, email, password });
  const helloMessage = JSON.stringify({ title: "Hello user :)", text: "<p>Raccoon notes is a exellent tool to keep your notes and ideas in one place.</p><p>You can get access to your notes from any place and time.</p>" });

  try {
    const res = await axios.post("/api/users", body, config);
    
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());

    // Set hello message for new user
    const resHello  = await axios.post(`/api/notes`, helloMessage, config);

    dispatch({
      type: SET_NEW_NOTE,
      payload: resHello.data
    })
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg)));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/auth", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg)));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
