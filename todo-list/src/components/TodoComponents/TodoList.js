import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import _ from 'lodash';
import constantJson from '../../redux/constant.json';

const TodoList = (props) => {
  const { sortBy } = props;
  const todoState = useSelector((state) => state.todo);
  const { todos } = todoState;

  const completedTodos = todos.filter((item) => item.completed === true);
  const sortedTodos =
    sortBy === constantJson.sortedBy.completed
      ? completedTodos
      : _.sortBy(todos, sortBy);

  return (
    <Fragment>
      {sortedTodos &&
        sortedTodos.length > 0 &&
        sortedTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </Fragment>
  );
};

export default TodoList;
