import React, { useState, useEffect } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import constantJson from '../../redux/constant.json';
import { unSelectTodo } from '../../redux/actions/formAction';
import { postTodo, getTodos, putTodo } from '../../redux/actions/todoAction';

const priorityStatus = constantJson.priorityStatus;

const TodoForm = (props) => {
  const dispatch = useDispatch();
  const { update_todo } = props;
  const [title, setTitle] = useState(update_todo?.title || '');
  const [priority, setPriority] = useState(
    update_todo?.priority || priorityStatus[0].value
  );
  const [isEditing, setEditing] = useState(false);

  useEffect(() => {
    setEditing(Boolean(update_todo));
  }, [update_todo]);

  useEffect(() => {
    if (isEditing) {
      setTitle(update_todo?.title);
      setPriority(update_todo?.priority || priorityStatus[0].value);
    }
  }, [isEditing]);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    setTitle('');
    setPriority(0);
    const newTodo = {
      id: update_todo?.id || uuidv4(),
      title,
      priority,
      completed: false,
    };

    if (isEditing) {
      dispatch(unSelectTodo());
      dispatch(putTodo(newTodo));
      setEditing(false);
    } else {
      dispatch(postTodo(newTodo));
    }
    dispatch(getTodos());
  };

  const handleChangePriority = (e) => {
    setPriority(e.target.value);
  };

  return (
    <div className="todo-form">
      {isEditing ? (
        <>
          <input
            placeholder="Enter Task name"
            value={title}
            onChange={handleChangeTitle}
            name="text"
            className="todo-input"
          />
          <button onClick={handleSubmit} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Enter Task name"
            value={title}
            onChange={handleChangeTitle}
            name="text"
            className="todo-input"
          />
          <button
            disabled={title.length === 0}
            onClick={handleSubmit}
            className="todo-button add"
          >
            Add Task
          </button>
        </>
      )}
      <FormControl>
        <FormLabel id="priority-status" color="success">
          Choose priority status
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="priority-status"
          name="position"
          onChange={handleChangePriority}
          value={priority}
        >
          {priorityStatus.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio color="success" />}
              label={option.label}
              labelPlacement="bottom"
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default TodoForm;
