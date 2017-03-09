import { put, call } from 'redux-saga/effects';
import  {fetchCourse}  from '../api/course';
import * as types from '../constants/actionTypes';

// Responsible for searching media library, making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure operation.
export function* fetchCourseSaga() {
  try {
    
    const courses = yield call(fetchCourse);
    yield put({ type: types.FETCH_COURSE_SUCCESS, courses });
      // put({ type: types.SELECTED_VIDEO, video: videos[0] }),
      // put({ type: types.FLICKR_IMAGES_SUCCESS, images }),
      // put({ type: types.SELECTED_IMAGE, image: images[0] })
    
  } catch (error) {
    yield put({ type: 'FETCH_COURSE_ERROR', error });
  }
}
