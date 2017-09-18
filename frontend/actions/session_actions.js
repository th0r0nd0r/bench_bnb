import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = (user) => (dispatch) => (
  APIUtil.login(user)
    .then((currentUser) => dispatch(receiveCurrentUser(currentUser)))
);

export const logout = () => (dispatch) => (
  APIUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null)))
);

export const signup = (user) => (dispatch) => (
  APIUtil.signup(user)
    .then((u) => dispatch(receiveCurrentUser(u)))
);
