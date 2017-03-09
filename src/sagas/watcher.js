import {takeLatest} from 'redux-saga/effects'
import {fetchCourseSaga} from './courseSaga'
import * as types from '../constants/actionTypes'

//watches for FETCH_COURSE_REQUEST action type asynchronously
export default function* watchFetchCourse(){
  yield takeLatest(types.FETCH_COURSE_REQUEST, fetchCourseSaga);
}
