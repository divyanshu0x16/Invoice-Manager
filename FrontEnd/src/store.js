import userReducer from './reducers/userReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
  userReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
