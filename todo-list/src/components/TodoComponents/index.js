import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos } from '../../redux/actions/todoAction';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Loader from './PreLoader';
import TodoHeader from './TodoHeader';

const TodoComponent = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  const todoForm = useSelector((state) => state.todoForm);
  const [sortBy, setSortBy] = useState('');
  const { loading } = todos;

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <Fragment>
      <TodoHeader sortedBy={setSortBy} />
      <TodoForm update_todo={todoForm.update_todo} />
      {loading ? <Loader count={6} /> : <TodoList sortBy={sortBy} />}
    </Fragment>
  );
};

export default TodoComponent;
