// The store

import { createStore, combineReducers} from "redux";
import { nameChanger } from "./actions";
import initialData from './initialData'
import { counterReducer, nameReducer } from './reducers'

const reducers = combineReducers({
  counter: counterReducer,
  name: nameChanger
});

export default createStore(
  (state, action) => reducers(state, action), initialData
);