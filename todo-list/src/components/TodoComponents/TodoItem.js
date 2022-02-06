import React, { useEffect, useState } from 'react';
import { ImPencil, ImCross, ImCheckmark } from 'react-icons/im';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodo } from '../../redux/actions/formAction';
import { getTodos, putTodo, deleteTodo } from '../../redux/actions/todoAction';
import constantJson from '../../redux/constant.json';
import Typography from '@mui/material/Typography';
import { CgChevronDoubleDown, CgChevronDoubleUp } from 'react-icons/cg';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { BsList } from 'react-icons/bs';

const TodoItem = (props) => {
  const { completed, title, priority } =
    props?.todo || constantJson.defaultItem;
  const [isEditing, setEditing] = useState(false);
  const dispatch = useDispatch();
  const todoForm = useSelector((state) => state?.todoForm);

  const editTask = () => {
    dispatch(selectTodo({ ...props?.todo, isEditing: true }));
  };

  useEffect(() => {
    setEditing(todoForm?.isEditing);
  }, [todoForm]);

  const finishedTask = () => {
    const newTodo = {
      ...props?.todo,
      completed: true,
    };
    dispatch(putTodo(newTodo));
    dispatch(getTodos());
  };

  const deleteTask = () => {
    dispatch(deleteTodo(props?.todo));
    dispatch(getTodos());
  };

  const PriorityIcon = () => {
    switch (priority) {
      case 0:
      case '0':
        return <CgChevronDoubleDown className="icon priority0" />;
      case 1:
      case '1':
        return <AiOutlineDown className="icon priority1" />;
      case 2:
      case '2':
        return <BsList className="icon priority2" />;
      case 3:
      case '3':
        return <AiOutlineUp className="icon priority3" />;
      case 4:
      case '4':
        return <CgChevronDoubleUp className="icon priority4" />;
      default:
        return <AiOutlineUp className="icon priority0" />;
    }
  };

  return (
    <div className={completed ? 'todo-row complete' : 'todo-row'}>
      <Typography variant="display1">
        <PriorityIcon />
        {title}
      </Typography>
      <div className={isEditing ? 'icons-disabled' : 'icons'}>
        <ImPencil
          className={completed ? 'icon icons-disabled' : 'icon'}
          onClick={() => editTask()}
        />
        <ImCheckmark
          className={completed ? 'icon icons-disabled' : 'icon'}
          onClick={() => finishedTask()}
        />
        <ImCross className="icon" onClick={() => deleteTask()} />
      </div>
    </div>
  );
};

export default TodoItem;
