import jwtDecode from 'jwt-decode';
import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../../config';
import normalizeResponseErrors from './../../utils/errors';
import { saveAuthToken, clearAuthToken } from './../../utils/local-storage';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
  type: SET_AUTH_TOKEN,
  authToken
});

// Stores currentUser uuid and email
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const setCurrentUser = currentUser => ({
  type: SET_CURRENT_USER,
  currentUser
});

export const SET_READY = 'SET_READY';
export const setReady = ready => ({
  type: SET_READY,
  ready
});

export const SET_LOADING = 'SET_LOADING';
export const setLoading = loading => ({
  type: SET_LOADING,
  loading
});

// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(setCurrentUser(decodedToken.user));
  dispatch(setReady(true));
  saveAuthToken(authToken);
};

// standard login form login and post-sign up login
export const login = (email, password) => (dispatch) => {
  dispatch(setLoading(true));
  return (
    fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    // Reject any requests which don't return a 200 status, creating
    // errors which follow a consistent format
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
      .then(() => dispatch(setLoading(false)))
      .catch((err) => {
        dispatch(setLoading(false));
        const { code } = err;
        if (code === 401) {
          // Could not authenticate, so return SubmissionError for ReduxForm
          return Promise.reject(
            new SubmissionError({
              _error: 'Incorrect email or password'
            })
          );
        }
        return 'Other error';
      })
  );
};

export const refreshAuthToken = () => (dispatch, getState) => {
  const { authToken } = getState().app.auth;
  return fetch(`${API_BASE_URL}/refresh`, {
    method: 'POST',
    headers: {
      // Provide our existing token as credentials to get a new one
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(() => storeAuthInfo(authToken, dispatch))
    .catch((err) => {
      const { code } = err;
      if (code === 401) {
        // We couldn't get a refresh token because our current credentials
        // are invalid or expired, so clear them and sign us out
        dispatch(setCurrentUser(null));
        dispatch(setAuthToken(null));
        clearAuthToken(authToken);
      }
    });
};

export const registerUser = user => () => {
  return fetch(`${API_BASE_URL}/sign-up`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch((err) => {
      const { reason, message, location } = err;

      if (reason === 'ValidationError') {
        // convert ValidationErrors into SubmissionErrors for Redux Form
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
      return 'other error';
    });
};

export const loginWithFacebook = facebookRes => (dispatch) => {
  dispatch(setLoading(true));
  return fetch(`${API_BASE_URL}/auth/facebook`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(facebookRes)
  })
    .then(res => res.json())
    .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
    .then(() => dispatch(setLoading(false)))
    .catch(() => dispatch(setLoading(false)));
};
