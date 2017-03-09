import {fork} from 'redux-saga/effects'
import watchFetchCourse from './watcher'


export default function* startForman(){
  yield fork(watchFetchCourse)
}
