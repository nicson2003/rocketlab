import { put, takeEvery } from 'redux-saga/effects';
import * as types from '../types';
import { getPersistedTodos, setPersistedTodos } from '../persistor';

function* fetchTodos() {
  try {
    const todos = getPersistedTodos('todos');
    yield put({ type: types.RETRIEVE_TASK_SUCCESS, todos: todos });
  } catch (e) {
    yield put({ type: types.RETRIEVE_TASK_FAILED, message: e.message });
  }
}

function* addTodo(action) {
  try {
    const todos = getPersistedTodos('todos');
    const newTodos = todos.concat(action.todo);
    setPersistedTodos('todos', newTodos);
    yield put({ type: types.CREATE_TASK_SUCCESS, newTodo: action.todo });
  } catch (e) {
    yield put({ type: types.CREATE_TASK_FAILED, message: e.message });
  }
}

function* editTodo(action) {
  try {
    const todos = getPersistedTodos('todos');
    const newTodos = todos.map((item) =>
      item.id === action.todo.id ? action.todo : item
    );
    setPersistedTodos('todos', newTodos);
    yield put({ type: types.UPDATE_TASK_SUCCESS, updatedTodo: action.todo });
  } catch (e) {
    yield put({ type: types.UPDATE_TASK_FAILED, message: e.message });
  }
}

function* deleteTodo(action) {
  try {
    const todos = getPersistedTodos('todos');
    const newTodos = todos.filter(item => item.id !== action.todo.id);
    setPersistedTodos('todos', newTodos);
    yield put({ type: types.UPDATE_TASK_SUCCESS, updatedTodo: action.todo });
  } catch (e) {
    yield put({ type: types.UPDATE_TASK_FAILED, message: e.message });
  }
}

function* todoSaga() {
  yield takeEvery(types.CREATE_TASK_REQUESTED, addTodo);
  yield takeEvery(types.RETRIEVE_TASK_REQUESTED, fetchTodos);
  yield takeEvery(types.UPDATE_TASK_REQUESTED, editTodo);
  yield takeEvery(types.DELETE_TASK_REQUESTED, deleteTodo);
}

export default todoSaga;
