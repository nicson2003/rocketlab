import * as type from '../types';

export function getTodos() {
  return {
    type: type.RETRIEVE_TASK_REQUESTED,
  };
}

export function putTodo(todo) {
  return {
    type: type.UPDATE_TASK_REQUESTED,
    todo: todo,
  };
}

export function postTodo(todo) {
  return {
    type: type.CREATE_TASK_REQUESTED,
    todo: todo,
  };
}

export function deleteTodo(todo) {
  return {
    type: type.DELETE_TASK_REQUESTED,
    todo: todo,
  };
}
