// The store

import { createStore, combineReducers} from "redux";
import initialData from './initialData'
import { counterReducer, nameReducer } from './reducers'

const reducers = combineReducers({
  counter: counterReducer,
  name: nameReducer
});

export default createStore(
  (state, action) => reducers(state, action), initialData
);