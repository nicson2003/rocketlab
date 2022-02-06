import * as type from '../types';

export function selectTodo(selected) {
  return {
    type: type.SELECTING_TASK_REQUESTED,
    update_todo: selected,
  };
}

export function unSelectTodo() {
  return {
    type: type.UNSELECTING_TASK_REQUESTED,
  };
}
