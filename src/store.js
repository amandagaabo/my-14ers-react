import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import appReducer from './modules/reducers';
import { loadAuthToken } from './utils/local-storage';
import { setAuthToken } from './modules/auth/actions';

const reducer = combineReducers({
  app: appReducer,
  form: formReducer,
});
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);
/* eslint-enable */

const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
}

export default store;
