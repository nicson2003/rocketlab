import * as type from '../types';

const initialState = {
  update_todo: null,
  isEditing: false,
  error: null,
};

export default function todoForm(state = initialState, action) {
  switch (action.type) {
    case type.SELECTING_TASK_REQUESTED:
      return {
        ...state,
        loading: true,
        update_todo: action.selected,
      };
    case type.SELECTING_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        isEditing: true,
        update_todo: action.update_todo,
      };
    case type.SELECTING_TASK_FAILED:
      return {
        ...state,
        loading: false,
        isEditing: false,
        update_todo: null,
      };
    case type.UNSELECTING_TASK_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.UNSELECTING_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        isEditing: false,
        update_todo: null,
      };
    case type.UNSELECTING_TASK_FAILED:
      return {
        ...state,
        loading: false,
        isEditing: false,
        update_todo: null,
      };
    default:
      return state;
  }
}
