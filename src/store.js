import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import appReducer from './modules/reducers';

const store = createStore(
  combineReducers({
    app: appReducer,
    form: formReducer,
  }),
  applyMiddleware(thunk),
);

// const authToken = loadAuthToken();
// if (authToken) {
//   const token = authToken;
//   store.dispatch(setAuthToken(token));
// }

export default store;
