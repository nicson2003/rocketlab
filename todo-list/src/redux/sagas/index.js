import { all } from 'redux-saga/effects';
import todoSaga from './todoSaga';
import formSaga from "./formSaga";

export default function* rootSaga() {
  yield all([
    todoSaga(),
    formSaga()
  ]);
}
