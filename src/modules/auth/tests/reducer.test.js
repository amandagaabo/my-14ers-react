import { expect } from 'chai';
import reducer from './../reducer';
import {
  setAuthToken,
  setCurrentUser,
  setLoading
} from './../actions';

const initialState = {
  authToken: null,
  currentUser: null,
  loading: false
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

  it('should set authToken on setAuthToken', () => {
    const authToken = 123;
    const state = reducer(undefined, setAuthToken(authToken));
    expect(state.authToken).to.equal(authToken);
  });

  it('Should set currentUser on setCurrentUser', () => {
    const currentUser = 456;
    const state = reducer(undefined, setCurrentUser(currentUser));
    expect(state.currentUser).to.equal(currentUser);
  });

  it('Should set loading to true on setLoading', () => {
    const loading = true;
    const state = reducer(undefined, setLoading(loading));
    expect(state.loading).to.equal(loading);
  });
});
