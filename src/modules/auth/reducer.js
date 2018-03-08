import {
  SET_AUTH_TOKEN,
  SET_CURRENT_USER,
  SET_READY,
  SET_LOADING
} from './actions';

const initialState = {
  authToken: null, // authToken !== null does not mean it has been validated
  currentUser: null,
  ready: false,
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
  case SET_AUTH_TOKEN:
    return {
      ...state,
      authToken: action.authToken
    };

  case SET_CURRENT_USER:
    return {
      ...state,
      currentUser: action.currentUser
    };

  case SET_READY:
    return {
      ...state,
      ready: action.ready
    };

  case SET_LOADING:
    return {
      ...state,
      loading: action.loading
    };

  default:
    return state;
  }
}
