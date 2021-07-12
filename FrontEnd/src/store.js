import userReducer from './reducers/userReducer';
import { createStore } from 'redux';

const store = createStore(userReducer);

export default store;
