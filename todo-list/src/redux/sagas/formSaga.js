import { put, takeEvery } from 'redux-saga/effects';
import * as types from '../types';

function* setActiveTodo(action) {
  try {
    yield put({
      type: types.SELECTING_TASK_SUCCESS,
      update_todo: action.update_todo,
    });
  } catch (e) {
    yield put({ type: types.SELECTING_TASK_FAILED, message: e.message });
  }
}

function* setInActiveTodo() {
  try {
    yield put({
      type: types.UNSELECTING_TASK_SUCCESS,
      update_todo: null,
    });
  } catch (e) {
    yield put({ type: types.UNSELECTING_TASK_FAILED, message: e.message });
  }
}

function* formSaga() {
  yield takeEvery(types.SELECTING_TASK_REQUESTED, setActiveTodo);
  yield takeEvery(types.UNSELECTING_TASK_REQUESTED, setInActiveTodo);
}

export default formSaga;
