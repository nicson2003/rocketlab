import * as type from '../types';

const initialState = {
  todos: [],
  newTodo: {},
  loading: false,
  error: null,
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case type.CREATE_TASK_REQUESTED:
      return {
        ...state,
        loading: true,
        newTodo: action.todo,
      };
    case type.CREATE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case type.CREATE_TASK_FAILED:
      return {
        ...state,
        loading: false,
        newTodo: {},
        error: action.message,
      };
    case type.RETRIEVE_TASK_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.RETRIEVE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.todos,
      };
    case type.RETRIEVE_TASK_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case type.UPDATE_TASK_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.UPDATE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        todo: action.todo,
      };
    case type.UPDATE_TASK_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };

    default:
      return state;
  }
}
