import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import reducersGenerate from './reducersGenerate';

// import {
//   USER
// } from './../constants/actionTypes';
// import initialState from './initialState';

// const users = reducersGenerate(USER, initialState.users);

const rootReducer = combineReducers({
  routing: routerReducer
  // auth,
  // users
});

export default rootReducer;