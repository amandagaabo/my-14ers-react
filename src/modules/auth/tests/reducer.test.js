import { expect } from 'chai';
import reducer from './../reducer';
import {
  SET_AUTH_TOKEN,
  setAuthToken,
  SET_CURRENT_USER,
  setCurrentUser,
  SET_READY,
  setReady
} from './../actions';

const initialState = {
  authToken: null,
  currentUser: null,
  ready: false
};

describe('Auth reducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const state = reducer(undefined, { type: '__UNKNOWN' });
    expect(state).to.deep.equal(initialState);
  });

  it('should return the current state on an unknown action', () => {
    const currentState = {};
    const state = reducer(currentState, { type: '__UNKNOWN' });
    expect(state).to.deep.equal(currentState);
  });

  describe('setAuthToken', () => {
    it('Should return the action and authToken', () => {
      const authToken = '';
      const action = setAuthToken(authToken);
      expect(action.type).to.equal(SET_AUTH_TOKEN);
      expect(action.authToken).to.equal(authToken);
    });
  });

  describe('setCurrentUser', () => {
    it('Should return the action and currentUser', () => {
      const currentUser = '';
      const action = setCurrentUser(currentUser);
      expect(action.type).to.equal(SET_CURRENT_USER);
      expect(action.currentUser).to.equal(currentUser);
    });
  });

  describe('setReady', () => {
    it('Should return the action and ready', () => {
      const ready = true;
      const action = setReady(ready);
      expect(action.type).to.equal(SET_READY);
      expect(action.ready).to.equal(ready);
    });
  });
});
