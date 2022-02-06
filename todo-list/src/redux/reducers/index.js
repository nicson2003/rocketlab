import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  todo: todoReducer,
  todoForm: formReducer,
});

export default rootReducer;
