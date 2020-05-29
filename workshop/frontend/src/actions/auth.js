import axios from "axios";
// import { returnErrors } from "./messages";

import { createMessage, returnErrors } from "./messages";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from "./types";

// Check Token and Load User
export const loadUser = () => (dispatch, getState) => {
  // Get token from state
  const token = getState().auth.token;

  //Header
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
    // User Loading
    dispatch({ type: USER_LOADING });
    axios
      .get("/api/auth/user/", config)
      .then(res => {
        dispatch({
          type: USER_LOADED,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: AUTH_ERROR
        });
      });
  } else {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Login User
export const login = (username, password) => dispatch => {
  //Header
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  // Request Body
  const body = JSON.stringify({ username, password });
  dispatch({ type: USER_LOADING });
  axios

    .post("/api/auth/login/", body, config)
    .then(res => {
      dispatch(
        createMessage({
          loginSuccess: ` Welcome ${res.data.user.username} !! `
        })
      );
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  //Header
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Get token from state
  const token = getState().auth.token;
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
    axios
      .post("/api/auth/logout/", null, config)
      .then(res => {
        dispatch(createMessage({ logoutSuccess: " See you later!! " }));
        dispatch({
          type: LOGOUT_SUCCESS
        });
      })
      .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
      });
  }
};

// Setup config with token - helper function
export const tokenConfig = getState => {
  // Get token from state
  const token = getState().auth.token;

  //Header
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  //If token add token to header
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
};
