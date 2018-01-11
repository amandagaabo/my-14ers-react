import { combineReducers } from 'redux';
import peaks from './peaks/reducer';
import auth from './auth/reducer';

const appReducer = combineReducers({
  peaks,
  auth,
});

export default appReducer;
