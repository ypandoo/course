import initialState from './initialState'
import * as types from '../constants/actionTypes'

export default function(state= initialState.courses, action){
  switch(action.type){
    case types.FETCH_COURSE_SUCCESS:
      return Object.assign({}, state, action.courses);
      // return {...state, courses: action.courses}
    case types.FETCH_COURSE_ERROR:
      return Object.assign({}, state, {error: action.error});
    default:
      return state
  }
}
